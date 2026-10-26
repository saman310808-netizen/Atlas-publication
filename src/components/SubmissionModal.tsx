import React, { useState } from 'react';
import { Feather, Check, AlertCircle, Eye, FileText, ArrowLeft, Copy, Clock } from 'lucide-react';
import { Category } from '../types';
import { submissionGuidelines } from '../data/mockContent';

interface SubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: Category;
}

export const SubmissionModal: React.FC<SubmissionModalProps> = ({
  isOpen,
  onClose,
  initialCategory = 'stories',
}) => {
  const [category, setCategory] = useState<Category>(initialCategory);
  const [title, setTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [origin, setOrigin] = useState('');
  const [manuscript, setManuscript] = useState('');
  const [abstract, setAbstract] = useState('');
  const [agreeBlindReview, setAgreeBlindReview] = useState(true);

  const [previewMode, setPreviewMode] = useState(false);
  const [submittedReceipt, setSubmittedReceipt] = useState<{
    id: string;
    timestamp: string;
    wordCount: number;
  } | null>(null);
  const [copiedReceipt, setCopiedReceipt] = useState(false);

  if (!isOpen) return null;

  const wordCount = manuscript.trim() ? manuscript.trim().split(/\s+/).length : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !manuscript || !authorName || !email) return;

    const receipt = {
      id: `ATL-LSE-${Math.floor(1000 + Math.random() * 9000)}`,
      timestamp: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      wordCount,
    };

    // Save submission locally
    try {
      const existing = JSON.parse(localStorage.getItem('atlas_submissions') || '[]');
      existing.push({
        ...receipt,
        title,
        authorName,
        email,
        course,
        origin,
        category,
        abstract,
        manuscript,
      });
      localStorage.setItem('atlas_submissions', JSON.stringify(existing));
    } catch {
      // LocalStorage fallback
    }

    setSubmittedReceipt(receipt);
  };

  const resetForm = () => {
    setTitle('');
    setManuscript('');
    setAbstract('');
    setSubmittedReceipt(null);
    setPreviewMode(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#3B241C]/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#F5E9DE] border border-[#3B241C]/30 max-w-2xl w-full my-8 rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 border-b border-[#3B241C]/15 bg-[#D7C6AE]/30 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xs bg-[#6D2638] text-[#F5E9DE] flex items-center justify-center">
              <Feather className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#7A3E2D] font-mono">
                LSE Student Portal
              </span>
              <h3 className="font-editorial text-2xl font-semibold text-[#3B241C] leading-none">
                Submit to ATLAS Journal
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#7A3E2D] hover:text-[#3B241C] text-sm font-mono px-2 py-1 rounded"
          >
            ✕ Close
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submittedReceipt ? (
            /* Successful Submission Confirmation */
            <div className="space-y-6 py-4">
              <div className="p-6 bg-[#D7C6AE]/30 border border-[#3B241C]/15 rounded-sm space-y-4">
                <div className="flex items-center gap-3 text-[#6D2638]">
                  <Check className="w-6 h-6 p-1 rounded-full bg-[#6D2638]/10" />
                  <span className="font-editorial text-2xl text-[#3B241C] font-semibold">
                    Manuscript Successfully Logged
                  </span>
                </div>

                <p className="text-sm text-[#3B241C]/90 leading-relaxed font-sans">
                  Thank you, <strong className="text-[#3B241C]">{authorName}</strong>. Your piece{' '}
                  <em className="font-serif">"{title}"</em> has been received into the ATLAS editorial review queue for Issue 05 (Spring Term).
                </p>

                <div className="bg-[#F5E9DE] p-4 rounded-xs border border-[#3B241C]/10 text-xs font-mono space-y-2 text-[#3B241C]">
                  <div className="flex justify-between">
                    <span className="text-[#7A3E2D]">Receipt Token:</span>
                    <span className="font-bold text-[#6D2638]">{submittedReceipt.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7A3E2D]">Registered Time:</span>
                    <span>{submittedReceipt.timestamp}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7A3E2D]">Total Length:</span>
                    <span className="tabular-nums">{submittedReceipt.wordCount} words</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7A3E2D]">Review Method:</span>
                    <span>Double-blind editorial read</span>
                  </div>
                </div>

                <div className="text-xs text-[#7A3E2D] space-y-1">
                  <div className="font-semibold text-[#3B241C]">What happens next?</div>
                  <p>
                    1. Blind copies will be circulated to two associate editors on Houghton Street.
                  </p>
                  <p>
                    2. You will receive editorial feedback within 3 weeks via your LSE email.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 justify-end">
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `ATLAS Submission Token: ${submittedReceipt.id}\nTitle: ${title}\nDate: ${submittedReceipt.timestamp}`
                    );
                    setCopiedReceipt(true);
                    setTimeout(() => setCopiedReceipt(false), 2000);
                  }}
                  className="px-4 py-2 text-xs font-medium border border-[#3B241C]/20 bg-[#F5E9DE] hover:bg-[#D7C6AE]/30 text-[#3B241C] rounded-sm flex items-center gap-1.5"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedReceipt ? 'Copied to Clipboard' : 'Copy Token'}</span>
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#3B241C] text-[#F5E9DE] hover:bg-[#6D2638] rounded-sm transition-colors"
                >
                  Submit Another Piece
                </button>
              </div>
            </div>
          ) : previewMode ? (
            /* Submission Live Preview Mode */
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#3B241C]/15">
                <button
                  type="button"
                  onClick={() => setPreviewMode(false)}
                  className="text-xs text-[#6D2638] font-medium flex items-center gap-1 hover:underline"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Return to Edit</span>
                </button>
                <span className="text-xs text-[#7A3E2D] font-mono tabular-nums">
                  Manuscript Proof · {wordCount} words
                </span>
              </div>

              <div className="bg-[#F5E9DE] p-6 border border-[#3B241C]/15 rounded-sm space-y-4">
                <div className="space-y-1 text-center border-b border-[#3B241C]/10 pb-4">
                  <span className="text-[11px] uppercase tracking-widest text-[#7A3E2D] font-mono">
                    {category.toUpperCase()} DRAFT
                  </span>
                  <h2 className="font-editorial text-3xl font-medium text-[#3B241C]">{title}</h2>
                  <p className="text-xs text-[#7A3E2D] font-serif italic">
                    By {authorName} ({course} · Hometown: {origin})
                  </p>
                </div>

                {abstract && (
                  <div className="bg-[#D7C6AE]/20 p-3 rounded-xs text-xs italic text-[#3B241C]/90">
                    <strong className="not-italic text-[#7A3E2D]">Editorial Abstract:</strong> {abstract}
                  </div>
                )}

                <div className="font-serif text-sm leading-relaxed text-[#3B241C] whitespace-pre-wrap max-h-72 overflow-y-auto p-3 bg-white/40 border border-[#3B241C]/10 rounded-xs">
                  {manuscript}
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setPreviewMode(false)}
                  className="px-4 py-2.5 text-xs font-medium border border-[#3B241C]/20 bg-[#F5E9DE] text-[#3B241C] rounded-sm"
                >
                  Make Changes
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#6D2638] hover:bg-[#7A3E2D] text-[#F5E9DE] rounded-sm shadow-xs"
                >
                  Confirm & Submit Manuscript
                </button>
              </div>
            </div>
          ) : (
            /* Submission Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Category selector buttons */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#7A3E2D]">
                  Genre / Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'stories', label: 'Short Story' },
                    { id: 'poetry', label: 'Poetry' },
                    { id: 'travel', label: 'Travelogue' },
                    { id: 'culture', label: 'Cultural Essay' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setCategory(item.id as Category)}
                      className={`p-2.5 text-xs rounded-sm border text-center transition-colors ${
                        category === item.id
                          ? 'bg-[#3B241C] text-[#F5E9DE] border-[#3B241C] font-semibold'
                          : 'bg-[#F5E9DE] text-[#3B241C] border-[#3B241C]/20 hover:border-[#6D2638]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Author Metadata Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs uppercase tracking-wider text-[#7A3E2D]">
                    Student Name
                  </label>
                  <input
                    required
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="e.g. Maya Sterling"
                    className="w-full px-3 py-2 bg-white/70 border border-[#3B241C]/20 rounded-sm text-xs focus:outline-none focus:border-[#6D2638]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs uppercase tracking-wider text-[#7A3E2D]">
                    Email (@lse.ac.uk preferred)
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="m.sterling@lse.ac.uk"
                    className="w-full px-3 py-2 bg-white/70 border border-[#3B241C]/20 rounded-sm text-xs focus:outline-none focus:border-[#6D2638]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs uppercase tracking-wider text-[#7A3E2D]">
                    LSE Department / Course
                  </label>
                  <input
                    required
                    type="text"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    placeholder="e.g. MSc International Relations"
                    className="w-full px-3 py-2 bg-white/70 border border-[#3B241C]/20 rounded-sm text-xs focus:outline-none focus:border-[#6D2638]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs uppercase tracking-wider text-[#7A3E2D]">
                    Hometown / Origin
                  </label>
                  <input
                    required
                    type="text"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    placeholder="e.g. Kyoto, Japan / Toronto, Canada"
                    className="w-full px-3 py-2 bg-white/70 border border-[#3B241C]/20 rounded-sm text-xs focus:outline-none focus:border-[#6D2638]"
                  />
                </div>
              </div>

              {/* Piece Title & Abstract */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="block text-xs uppercase tracking-wider text-[#7A3E2D]">
                    Title of Work
                  </label>
                  <input
                    required
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Notes on Leaving Kyoto at Midnight"
                    className="w-full px-3 py-2 bg-white/70 border border-[#3B241C]/20 rounded-sm text-xs focus:outline-none focus:border-[#6D2638] font-editorial text-base"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs uppercase tracking-wider text-[#7A3E2D]">
                    Short Summary or Geographical Context (Optional)
                  </label>
                  <input
                    type="text"
                    value={abstract}
                    onChange={(e) => setAbstract(e.target.value)}
                    placeholder="1–2 sentences introducing the setting, themes, or translations..."
                    className="w-full px-3 py-2 bg-white/70 border border-[#3B241C]/20 rounded-sm text-xs focus:outline-none focus:border-[#6D2638]"
                  />
                </div>

                {/* Manuscript text body */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs uppercase tracking-wider text-[#7A3E2D]">
                      Manuscript Text / Verse
                    </label>
                    <span className="text-[11px] font-mono text-[#7A3E2D] tabular-nums">
                      {wordCount} words
                    </span>
                  </div>
                  <textarea
                    required
                    rows={8}
                    value={manuscript}
                    onChange={(e) => setManuscript(e.target.value)}
                    placeholder="Paste or write your story, poem, or essay here..."
                    className="w-full p-3 bg-white/70 border border-[#3B241C]/20 rounded-sm text-xs font-serif leading-relaxed focus:outline-none focus:border-[#6D2638]"
                  />
                </div>
              </div>

              {/* Blind Review Checkbox */}
              <div className="flex items-start gap-3 bg-[#D7C6AE]/25 p-3.5 rounded-sm border border-[#3B241C]/10">
                <input
                  id="blind-review"
                  type="checkbox"
                  checked={agreeBlindReview}
                  onChange={(e) => setAgreeBlindReview(e.target.checked)}
                  className="mt-0.5 accent-[#6D2638]"
                />
                <label htmlFor="blind-review" className="text-xs text-[#3B241C]/90 leading-snug">
                  I agree to ATLAS’s <strong>double-blind editorial review</strong>. My manuscript text will be reviewed without identifiable author credentials by student peer editors.
                </label>
              </div>

              {/* Form buttons */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setPreviewMode(true)}
                  disabled={!title || !manuscript}
                  className="px-4 py-2.5 text-xs font-medium border border-[#3B241C]/30 text-[#3B241C] hover:bg-[#D7C6AE]/30 rounded-sm disabled:opacity-40 flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview Formatting</span>
                </button>

                <button
                  type="submit"
                  disabled={!title || !manuscript || !authorName || !email}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#6D2638] hover:bg-[#7A3E2D] disabled:opacity-50 text-[#F5E9DE] rounded-sm transition-colors shadow-xs"
                >
                  Submit Manuscript
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
