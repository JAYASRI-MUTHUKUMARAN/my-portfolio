import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, ExternalLink, GitBranch, Star, Code2, Sparkles, RefreshCw } from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export const GitHubSection: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // Fallback static repos in case of API rate limiting or offline state
  const fallbackRepos: GitHubRepo[] = [
    {
      id: 1,
      name: 'SignSense-Pro-WLASL',
      description: 'Word-Level American Sign Language translation system with MediaPipe and CNN-LSTM on the WLASL dataset.',
      html_url: 'https://github.com/JAYASRI-MUTHUKUMARAN',
      language: 'Python',
      stargazers_count: 5,
      forks_count: 2,
      updated_at: '2026-02-15T00:00:00Z',
    },
    {
      id: 2,
      name: 'smart-email-classifier',
      description: 'FastAPI and React application fetching Gmail messages and categorizing them using Gemini LLM integration.',
      html_url: 'https://github.com/JAYASRI-MUTHUKUMARAN',
      language: 'Python',
      stargazers_count: 3,
      forks_count: 1,
      updated_at: '2026-01-20T00:00:00Z',
    },
    {
      id: 3,
      name: 'geospatial-weather-dashboard',
      description: 'Interactive single-page weather dashboard built with React.js, Google Maps API, and OpenWeather API.',
      html_url: 'https://github.com/JAYASRI-MUTHUKUMARAN',
      language: 'JavaScript',
      stargazers_count: 4,
      forks_count: 1,
      updated_at: '2025-11-10T00:00:00Z',
    },
    {
      id: 4,
      name: 'handwritten-digit-recognition',
      description: 'Flask web app classifying handwritten digits with custom bounding-box centering preprocessing.',
      html_url: 'https://github.com/JAYASRI-MUTHUKUMARAN',
      language: 'Python',
      stargazers_count: 2,
      forks_count: 0,
      updated_at: '2025-10-05T00:00:00Z',
    },
  ];

  useEffect(() => {
    let isMounted = true;

    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        // GitHub Public API (no secret needed)
        const response = await fetch(
          'https://api.github.com/users/JAYASRI-MUTHUKUMARAN/repos?sort=updated&per_page=6',
          {
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
          }
        );

        if (!response.ok) {
          throw new Error('GitHub API rate limit or error');
        }

        const data = await response.json();
        if (isMounted) {
          if (Array.isArray(data) && data.length > 0) {
            setRepos(data);
          } else {
            setRepos(fallbackRepos);
          }
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(true);
          setRepos(fallbackRepos);
          setLoading(false);
        }
      }
    };

    fetchGitHubData();

    return () => {
      isMounted = false;
    };
  }, []);

  const getLanguageColor = (lang: string | null) => {
    switch (lang?.toLowerCase()) {
      case 'python':
        return 'bg-blue-400';
      case 'javascript':
        return 'bg-amber-400';
      case 'typescript':
        return 'bg-sky-400';
      case 'html':
        return 'bg-orange-400';
      case 'css':
        return 'bg-purple-400';
      case 'c':
        return 'bg-slate-400';
      default:
        return 'bg-[#3FE3C4]';
    }
  };

  return (
    <section className="py-20 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141C30] border border-[#25314F] text-xs font-mono text-[#3FE3C4] mb-3">
              <Github className="w-3.5 h-3.5" />
              <span>Open Source Activity</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Explore My Code
            </h2>
            <p className="mt-2 text-base text-[#8D96AE]">
              I use GitHub to build, experiment, learn and share software projects.
            </p>
          </div>

          <a
            id="visit-github-main-btn"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm bg-[#141C30] text-[#EDEFF5] border border-[#25314F] hover:border-[#3FE3C4] hover:text-[#3FE3C4] transition-all self-start md:self-auto"
          >
            <Github className="w-4 h-4" />
            <span>Visit GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {repos.slice(0, 6).map((repo) => (
            <div
              key={repo.id}
              className="p-5 rounded-2xl bg-[#0E1524] border border-[#25314F] hover:border-[#3FE3C4]/40 transition-colors flex flex-col justify-between group shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-[#3FE3C4]" />
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading font-semibold text-base text-white hover:text-[#3FE3C4] transition-colors"
                    >
                      {repo.name}
                    </a>
                  </div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8D96AE] hover:text-[#3FE3C4]"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-xs text-[#8D96AE] leading-relaxed line-clamp-3">
                  {repo.description || 'Software development project and experimentation repository.'}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#1F293D] flex items-center justify-between text-xs font-mono text-[#8D96AE]">
                <div className="flex items-center gap-1.5">
                  <span className={`w-2.5 h-2.5 rounded-full ${getLanguageColor(repo.language)}`}></span>
                  <span>{repo.language || 'Code'}</span>
                </div>

                <div className="flex items-center gap-3">
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-400" />
                      <span>{repo.stargazers_count}</span>
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <GitBranch className="w-3 h-3 text-[#3FE3C4]" />
                    <span>main</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
