import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Database,
  Code2,
  Share2,
  FileText,
  Lock,
  CheckCircle2,
  Copy,
  Check,
  ShieldCheck,
  Globe,
  Scale,
  RefreshCw,
  FolderArchive,
  Layers
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { journalInfo } from '../data/journalDocData';

export default function DataAvailabilityPolicy() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const statementExamples = [
    {
      type: 'Option 1 · Openly Available Data',
      text: 'Data Availability Statement: The datasets generated and analyzed during this study are publicly available in the [Repository Name] repository at: [DOI / Persistent URL].',
      badge: 'Recommended',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300'
    },
    {
      type: 'Option 2 · Available Upon Reasonable Request',
      text: 'Data Availability Statement: The datasets generated during this study are available from the corresponding author upon reasonable request.',
      badge: 'On Request',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-300'
    },
    {
      type: 'Option 3 · Included in the Article & Supplementary Material',
      text: 'Data Availability Statement: All data supporting the findings of this study are included within the article and its supplementary materials.',
      badge: 'Self-Contained',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300'
    },
    {
      type: 'Option 4 · Restricted / Proprietary Data',
      text: 'Data Availability Statement: The data are not publicly available because they contain confidential or proprietary information. Access may be granted upon reasonable request, subject to applicable legal, ethical, or contractual restrictions.',
      badge: 'Restricted',
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-300'
    }
  ];

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const sections = [
    {
      num: '01',
      title: 'Policy Statement & Objectives',
      icon: <Database className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
          <p>
            The <span className="font-bold text-[#0f4a85]">{journalInfo.fullName} ({journalInfo.acronym})</span> is committed to promoting transparency, reproducibility, and scientific integrity in research. Authors are encouraged to make the raw and processed data supporting the findings of their research openly accessible whenever possible, while fully respecting legal, ethical, privacy, confidentiality, and intellectual property requirements.
          </p>
          <div className="p-4 bg-blue-50/80 border border-blue-200 rounded-2xl flex items-start space-x-3 text-xs text-blue-950">
            <Share2 className="w-4 h-4 text-[#0f4a85] shrink-0 mt-0.5" />
            <span>
              <strong>Scientific Impact:</strong> Open research data enhances the verification, validation, peer evaluation, and reuse of published findings, driving cross-disciplinary scientific progress.
            </span>
          </div>
        </div>
      )
    },
    {
      num: '02',
      title: 'Scope of Applicable Research',
      icon: <Layers className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3">
          <p className="text-sm text-slate-700 leading-relaxed">
            This policy applies to all manuscript types submitted to {journalInfo.acronym}, including:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-slate-700">
            {[
              'Original Research Articles',
              'Review Articles with Datasets',
              'Technical Notes & Methods',
              'Case Studies & Reports',
              'Short Communications',
              'Interdisciplinary Papers'
            ].map((type, idx) => (
              <div key={idx} className="flex items-center space-x-2 p-2.5 bg-slate-50 rounded-xl border border-slate-100 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{type}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      num: '03',
      title: 'Definition of Research Data',
      icon: <FileText className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-3">
          <p className="text-sm text-slate-700 leading-relaxed">
            For the purposes of this policy, research data encompasses all digital or physical materials necessary to interpret, verify, and replicate results:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
            {[
              'Experimental & Lab measurements',
              'Observational & Field records',
              'Survey & Questionnaire results',
              'Simulation outputs & logs',
              'Computational datasets & statistics',
              'Software code, scripts & notebooks',
              'Mathematical models & algorithms',
              'Machine learning models & weights',
              'High-res images & microscopy files',
              'Protocols & laboratory workflows',
              'Supplementary tables & raw spreadsheets',
              'Metadata required for interpretation'
            ].map((item, idx) => (
              <div key={idx} className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-slate-700 flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      num: '04',
      title: 'Mandatory Data Availability Statement',
      icon: <FileText className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-slate-700 leading-relaxed">
            All submitted manuscripts <strong>must include a Data Availability Statement</strong> placed immediately before the References section. Authors can use one of the standard templates below:
          </p>

          <div className="space-y-3">
            {statementExamples.map((ex, idx) => (
              <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2 relative group text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0f4a85]">{ex.type}</span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${ex.badgeColor}`}>
                      {ex.badge}
                    </span>
                    <button
                      onClick={() => handleCopy(ex.text, idx)}
                      className="p-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-all flex items-center space-x-1 text-xs cursor-pointer"
                      title="Copy template text"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-[10px] text-emerald-600 font-bold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="text-[10px]">Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
                <p className="text-xs text-slate-700 font-mono bg-white p-3 rounded-xl border border-slate-200/80 leading-relaxed select-all">
                  {ex.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      num: '05',
      title: 'Data Repositories & Persistent Identifiers',
      icon: <FolderArchive className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
          <p>
            Authors are encouraged to deposit datasets into trusted, community-recognized public repositories prior to or upon manuscript publication.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <span className="font-bold text-[#0f4a85] block">Accepted Repositories</span>
              <p className="text-slate-600">Zenodo, Figshare, Dryad, IEEE DataPort, OSF, Mendeley Data, GitHub/GitLab (for software), or institutional repositories.</p>
            </div>
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <span className="font-bold text-[#0f4a85] block">Persistent Identifiers</span>
              <p className="text-slate-600">Whenever possible, datasets must be accompanied by a permanent Digital Object Identifier (DOI), accession number, or persistent URL.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      num: '06',
      title: 'Software, Code & Computational Reproducibility',
      icon: <Code2 className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            Where custom code, scripts, or algorithmic pipelines are integral to reproducing research results, authors are encouraged to provide open access to the codebase under an open license (e.g., MIT, Apache 2.0, GNU GPL).
          </p>
          <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-2xl text-xs space-y-1.5 text-amber-950">
            <span className="font-bold block">Documentation Requirements</span>
            <p>Authors should document: (1) Programming language & version, (2) Key dependencies & library versions, (3) Operating system or hardware environment, and (4) Parameter configurations.</p>
          </div>
        </div>
      )
    },
    {
      num: '07',
      title: 'Ethical, Legal & Human Participant Safeguards',
      icon: <ShieldCheck className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            Data sharing must strictly respect privacy laws, institutional review board (IRB) mandates, and participant confidentiality:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {[
              'Human participant data must be completely de-identified and anonymized.',
              'Data sharing must align with the terms of informed consent agreements.',
              'Third-party commercial or proprietary data restrictions must be explicitly disclosed.',
              'Data containing sensitive national security or export-controlled details must not be uploaded.'
            ].map((rule, idx) => (
              <div key={idx} className="flex items-start space-x-2 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-slate-700">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      num: '08',
      title: 'Data Citation & Reference Standards',
      icon: <Share2 className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            Datasets used in the research should be formally cited in the reference list using the IEEE citation format:
          </p>
          <div className="p-4 bg-slate-900 text-slate-100 rounded-2xl text-xs font-mono space-y-1 overflow-x-auto">
            <span className="text-amber-400 font-bold block">// Dataset Citation Format</span>
            <p className="text-slate-300">[1] Authors, "Dataset Title," Repository Name, Version x.x, Year. DOI: 10.xxxx/xxxxxx</p>
          </div>
        </div>
      )
    },
    {
      num: '09',
      title: 'Editorial Peer Review Access & Research Integrity',
      icon: <Scale className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            Editors and peer reviewers may request confidential access to underlying raw datasets or simulation code during the evaluation process to verify results. Authors are expected to fulfill reasonable requests.
          </p>
          <p className="text-xs text-slate-600 bg-blue-50 p-3 rounded-xl border border-blue-200">
            {journalInfo.acronym} maintains zero tolerance for fabricated or falsified datasets. Suspected data anomalies will be investigated under the journal's Publication Ethics and Retraction policies.
          </p>
        </div>
      )
    },
    {
      num: '10',
      title: 'Policy Review',
      icon: <RefreshCw className="w-5 h-5" />,
      color: 'amber',
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          This Data Availability Policy is reviewed periodically to maintain harmonization with evolving international open science standards, data repository ecosystems, and COPE best practices.
        </p>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      <PageHero
        title="Data Availability Policy"
        subtitle="Mandatory guidelines on research dataset sharing, code reproducibility, public repository archiving, and Data Availability Statements."
        badge="Open Science & Data Reproducibility"
        breadcrumbs={[
          { name: 'Policies', path: '/ethics-policy' },
          { name: 'Data Availability Policy' }
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-8 text-left">
        {sections.map((sec) => (
          <div
            key={sec.num}
            className="academic-card bg-white rounded-3xl p-6 sm:p-8 space-y-4 relative overflow-hidden"
          >
            <div
              className={`absolute top-0 left-6 right-6 h-1 rounded-b-full ${
                sec.color === 'amber'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-600'
                  : 'bg-gradient-to-r from-blue-600 to-[#0f4a85]'
              }`}
            />

            <div className="flex items-center space-x-3">
              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${
                  sec.color === 'amber'
                    ? 'bg-amber-50 border-amber-200 text-amber-700'
                    : 'bg-blue-50 border-blue-200 text-blue-700'
                }`}
              >
                {sec.icon}
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 block">
                  SECTION {sec.num}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#0f4a85]">{sec.title}</h3>
              </div>
            </div>

            <div className="pl-0 sm:pl-14">{sec.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
