import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import websiteSettings from '../content/website-settings.json';
import { logoImage, articles } from '../data/mockContent';
import type { Article } from '../types';

interface HeroSectionProps {
  onSelectArticle: (article: Article) => void;
  onExploreIssue: () => void;
  onExploreAtlas: () => void;
  onOpenContribute: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectArticle, onExploreAtlas }) => {
  const leadArticle = articles[0];
  return (
    <section className="atlas-home-hero">
      <div className="atlas-masthead">
        <div className="atlas-masthead-top">
          <span>AN INTERNATIONAL STUDENT PUBLICATION</span>
          <span>LONDON · GLOBAL PERSPECTIVES</span>
        </div>
        <div className="atlas-masthead-identity">
          <img src={logoImage} alt="The Atlas original logo" className="atlas-masthead-logo" />
          <div className="atlas-masthead-wordmark">
            <span className="atlas-wordmark-the">THE</span>
            <h1>ATLAS</h1>
            <p>Where cultures connect.</p>
          </div>
        </div>
        <div className="atlas-masthead-bottom">
          <span>CULTURE</span><span>·</span><span>STORIES</span><span>·</span><span>TRAVEL</span><span>·</span><span>PERSPECTIVES</span>
        </div>
      </div>

      <div className="atlas-lead-layout">
        <div className="atlas-lead-image">
          <img
            src="https://raw.githubusercontent.com/saman310808-netizen/Atlas-publication/main/56669092-9720-4d09-a65d-ea5cb258959b.jpeg"
            alt="Colourful coastal village above the Mediterranean Sea"
            referrerPolicy="no-referrer"
          />
          <span className="atlas-photo-credit">Image: Unsplash</span>
        </div>
        <div className="atlas-lead-copy">
          <div className="atlas-section-eyebrow"><span className="atlas-eyebrow-rule" /> THE ATLAS · AN INTRODUCTION</div>
          <h2>{websiteSettings.homepage.headline}</h2>
          <p>{websiteSettings.homepage.introduction}</p>
          <button type="button" className="atlas-text-link" onClick={onExploreAtlas}>
            Explore the publication <ArrowUpRight size={18} aria-hidden="true" />
          </button>
          <div className="atlas-lead-index"><span>01 / A WORLD OF PERSPECTIVES</span><ArrowDownRight size={20} aria-hidden="true" /></div>
        </div>
      </div>

      <div className="atlas-editors-strip">
        <div className="atlas-editors-heading">
          <span className="atlas-section-eyebrow">CURATED BY THE EDITORS</span>
          <h2>Editorial Picks</h2>
          <p>Writing selected by the Editors-in-Chief.</p>
        </div>
        <div className="atlas-editors-feature">
          {leadArticle ? (
            <button type="button" onClick={() => onSelectArticle(leadArticle)}>
              <span className="atlas-section-eyebrow">FEATURED READING</span>
              <strong>{leadArticle.title}</strong>
              <span>{leadArticle.author.name} <ArrowUpRight size={17} aria-hidden="true" /></span>
            </button>
          ) : (
            <p>Selections from our editors will appear here.</p>
          )}
        </div>
      </div>
    </section>
  );
};
