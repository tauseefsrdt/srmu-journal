import React from 'react';
import { Link } from 'react-router-dom';
import {
  Scale,
  ShieldCheck,
  UserCheck,
  Building2,
  FileText,
  AlertTriangle,
  Lock,
  MessageSquare,
  RefreshCw,
  DollarSign,
  Briefcase,
  Users,
  CheckCircle2,
  Copy,
  Check,
  ArrowUpRight
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { journalInfo } from '../data/journalDocData';

const sampleStatement =
  'Conflict of Interest: The authors declare that they have no known financial, professional, institutional, or personal conflicts of interest that could have influenced the work reported in this paper.';

export default function ConflictOfInterestPolicy() {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleStatement);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const sections = [
    {
      num: '01',
      title: 'Policy Statement',
      icon: <ShieldCheck className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-3">
          <p className="text-sm text-slate-700 leading-relaxed">
            The <span className="font-bold text-[#0f4a85]">{journalInfo.fullName} ({journalInfo.acronym})</span> is committed to ensuring the integrity, transparency, objectivity, and credibility of the scholarly publication process. All participants in the publication process—including authors, reviewers, editors, editorial board members, and the publisher—are expected to disclose any actual, potential, or perceived conflicts of interest that could influence, or reasonably appear to influence, their professional judgment.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            The purpose of this policy is to safeguard the fairness of editorial decisions and maintain the trust of authors, reviewers, readers, and the broader research community.
          </p>
        </div>
      )
    },
    {
      num: '02',
      title: 'Definition of Conflict of Interest',
      icon: <Scale className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3">
          <p className="text-sm text-slate-700 leading-relaxed">
            A conflict of interest (COI) exists when personal, financial, professional, institutional, or other relationships may influence—or may reasonably be perceived to influence—the preparation, review, editorial handling, or publication of a manuscript.
          </p>
          <div className="p-4 bg-amber-50/80 border border-amber-200/80 rounded-2xl text-xs text-amber-900 leading-relaxed font-medium">
            <strong>Key Principle:</strong> Having a conflict of interest does not necessarily prevent participation in the publication process; however, such conflicts must be disclosed promptly and managed appropriately.
          </div>
        </div>
      )
    },
    {
      num: '03',
      title: 'Conflicts of Interest for Authors',
      icon: <UserCheck className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-5">
          <p className="text-sm text-slate-700 leading-relaxed">
            Authors must disclose all relationships or activities that could influence the interpretation or presentation of their research across the following categories:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Financial Interests */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2.5">
              <div className="flex items-center space-x-2 text-[#0f4a85] font-bold text-xs uppercase tracking-wider">
                <DollarSign className="w-4 h-4 text-amber-600" />
                <span>Financial Interests</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {[
                  'Research grants or project funding',
                  'Employment by a related commercial organization',
                  'Consultancy fees and honoraria',
                  'Paid expert testimony',
                  'Stock ownership or shareholding',
                  'Patents (issued, pending, or licensed)',
                  'Royalties and commercial sponsorship'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Professional Interests */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2.5">
              <div className="flex items-center space-x-2 text-[#0f4a85] font-bold text-xs uppercase tracking-wider">
                <Briefcase className="w-4 h-4 text-blue-600" />
                <span>Professional Interests</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {[
                  'Editorial positions in related journals',
                  'Membership on corporate advisory boards',
                  'Collaboration with organizations benefiting from the work',
                  'Professional rivalries or competitive relationships'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Personal Interests */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2.5">
              <div className="flex items-center space-x-2 text-[#0f4a85] font-bold text-xs uppercase tracking-wider">
                <Users className="w-4 h-4 text-purple-600" />
                <span>Personal Interests</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {[
                  'Family relationships with co-authors or reviewers',
                  'Close personal relationships',
                  'Personal disputes that could impair objectivity'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Institutional Interests */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2.5">
              <div className="flex items-center space-x-2 text-[#0f4a85] font-bold text-xs uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-emerald-600" />
                <span>Institutional Interests</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {[
                  'Institutional affiliations directly benefiting from publication',
                  'Departmental or organizational interests relevant to the submitted study'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Standard Disclosure Box */}
          <div className="p-5 bg-blue-50/70 border border-blue-200 rounded-2xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#0f4a85] uppercase tracking-wider">
                Recommended Standard Manuscript Disclosure Statement
              </span>
              <button
                onClick={handleCopy}
                className="inline-flex items-center space-x-1 px-2.5 py-1 bg-white border border-blue-300 rounded-lg text-xs font-semibold text-[#0f4a85] hover:bg-blue-100 transition-colors cursor-pointer"
                title="Copy statement template"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Text'}</span>
              </button>
            </div>
            <p className="text-xs font-mono text-slate-800 bg-white p-3 rounded-xl border border-blue-100/80 leading-relaxed italic">
              "{sampleStatement}"
            </p>
          </div>
        </div>
      )
    },
    {
      num: '04',
      title: 'Responsibilities of Reviewers',
      icon: <UserCheck className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3">
          <p className="text-sm text-slate-700 leading-relaxed">
            Reviewers must disclose any actual or potential conflicts before accepting a review assignment. Reviewers should decline the invitation if they have:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            {[
              'Financial interests related to the manuscript.',
              'Current or recent collaboration with any author.',
              'Employment at the same institution as an author (where this could impair impartiality).',
              'Personal relationships with any author.',
              'Academic competition or disputes that could affect objectivity.',
              'Any other circumstance that may compromise an unbiased review.'
            ].map((pt, idx) => (
              <div key={idx} className="flex items-start space-x-2 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 italic mt-2">
            Reviewers must not use unpublished information obtained during peer review for personal, academic, or commercial advantage.
          </p>
        </div>
      )
    },
    {
      num: '05',
      title: 'Responsibilities of Editors',
      icon: <ShieldCheck className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-3">
          <p className="text-sm text-slate-700 leading-relaxed">
            Editors are responsible for ensuring that editorial decisions are fair, objective, and free from undue influence. Editors must recuse themselves from handling a manuscript if they have:
          </p>
          <ul className="space-y-1.5 text-xs text-slate-700 pl-2">
            {[
              'Financial interests related to the research.',
              'Personal relationships with the authors.',
              'Recent collaboration with the authors.',
              'Institutional affiliations that may create bias.',
              'Any circumstance that could reasonably be perceived as affecting impartiality.'
            ].map((pt, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0f4a85] mt-1.5 shrink-0" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-600 bg-blue-50/70 p-3 rounded-xl border border-blue-200">
            When an editor has a conflict of interest, the manuscript will be reassigned immediately to another qualified editor.
          </p>
        </div>
      )
    },
    {
      num: '06',
      title: 'Responsibilities of Editorial Board Members',
      icon: <Building2 className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            Editorial Board members who submit manuscripts to {journalInfo.acronym} will not participate in any stage of the editorial handling or decision-making process for their own submissions.
          </p>
          <p>
            Their manuscripts will undergo the same editorial screening and double-blind peer review process as all other submissions and will be managed completely independently by another editor.
          </p>
        </div>
      )
    },
    {
      num: '07',
      title: 'Publisher Responsibilities',
      icon: <Building2 className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-2">
          <p className="text-sm text-slate-700 leading-relaxed mb-3">The publisher shall:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            {[
              'Respect complete editorial independence.',
              'Avoid influencing editorial decisions for commercial or financial reasons.',
              'Ensure transparent implementation of this conflict of interest policy.',
              'Support investigations into undisclosed conflicts of interest when necessary.'
            ].map((pt, idx) => (
              <div key={idx} className="flex items-start space-x-2 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      num: '08',
      title: 'Disclosure Requirements',
      icon: <FileText className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3">
          <p className="text-sm text-slate-700 leading-relaxed">Conflict of interest disclosures should be made at every key juncture:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              { role: 'Authors', stage: 'At the time of manuscript submission.' },
              { role: 'Reviewers', stage: 'Before accepting a review assignment.' },
              { role: 'Editors', stage: 'Before accepting editorial responsibility.' },
              { role: 'All Parties', stage: 'Whenever a new conflict arises during the publication process.' }
            ].map((row, idx) => (
              <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs">
                <span className="font-bold text-[#0f4a85] block mb-0.5">{row.role}</span>
                <span className="text-slate-600">{row.stage}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-red-600 font-semibold bg-red-50 p-2.5 rounded-xl border border-red-200">
            Failure to disclose relevant conflicts may be considered a serious breach of publication ethics.
          </p>
        </div>
      )
    },
    {
      num: '09',
      title: 'Management of Conflicts of Interest',
      icon: <Scale className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-3">
          <p className="text-sm text-slate-700 leading-relaxed">
            When a conflict of interest is identified, {journalInfo.acronym} may take one or more of the following actions:
          </p>
          <div className="space-y-2 text-xs text-slate-700">
            {[
              'Request additional disclosure details from the concerned party.',
              'Assign a different reviewer or editor to ensure impartiality.',
              'Seek an independent editorial assessment from an unconflicted board member.',
              'Publish an appropriate disclosure statement alongside the published article.',
              'Reject the manuscript if the conflict compromises the integrity or validity of the research.',
              'Correct or retract a published article if an undisclosed conflict is discovered after publication and has materially affected the publication process.'
            ].map((pt, idx) => (
              <div key={idx} className="flex items-start space-x-2.5 p-2 bg-slate-50 rounded-xl border border-slate-100">
                <span className="w-4 h-4 rounded-full bg-[#0f4a85] text-white text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  {idx + 1}
                </span>
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      num: '10',
      title: 'Funding Disclosure',
      icon: <DollarSign className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            Authors must clearly disclose all sources of financial support in the manuscript, including:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
            {['Government funding', 'Research grants', 'Institutional funding', 'Industry sponsorship', 'Private foundations', 'Commercial organizations'].map((f, i) => (
              <div key={i} className="p-2.5 bg-blue-50 text-[#0f4a85] font-semibold rounded-xl border border-blue-200/70 text-center">
                {f}
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-600 mt-2">
            The role of the funding organization in study design, data collection, analysis, interpretation, manuscript preparation, and publication decisions should also be disclosed where applicable.
          </p>
        </div>
      )
    },
    {
      num: '11',
      title: 'Undisclosed Conflicts',
      icon: <AlertTriangle className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-3">
          <p className="text-sm text-slate-700 leading-relaxed">
            If an undisclosed conflict of interest is identified before or after publication, the Editorial Board will investigate the matter. Depending on the findings, the journal may:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {[
              { title: 'Request Clarification', desc: 'From the authors or reviewers in writing.' },
              { title: 'Publish Correction', desc: 'Or formal disclosure statement.' },
              { title: 'Expression of Concern', desc: 'While inquiries or investigations are ongoing.' },
              { title: 'Article Retraction', desc: 'In serious cases of ethical misconduct.' }
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="font-bold text-[#0f4a85] block mb-0.5">{item.title}</span>
                <span className="text-slate-600">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      num: '12',
      title: 'Confidentiality',
      icon: <Lock className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <p>
            All disclosed conflict of interest information will be handled confidentially during the editorial process and used solely to ensure impartial editorial and peer review decisions.
          </p>
          <p className="text-xs text-slate-500 italic">
            Only information necessary for transparency will be included in the final published article.
          </p>
        </div>
      )
    },
    {
      num: '13',
      title: 'Appeals',
      icon: <MessageSquare className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            Authors may appeal decisions related to conflicts of interest by submitting a written explanation and supporting evidence to the Editor-in-Chief within <span className="font-bold text-[#0f4a85]">30 days of notification</span>.
          </p>
          <p className="text-xs text-slate-600 bg-blue-50 p-3 rounded-xl border border-blue-200">
            The appeal will be reviewed by the Editorial Board, strictly excluding any individual with a conflict related to the case. The decision of the Editorial Board shall be final.
          </p>
        </div>
      )
    },
    {
      num: '14',
      title: 'Policy Review',
      icon: <RefreshCw className="w-5 h-5" />,
      color: 'amber',
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          This Conflict of Interest Policy will be reviewed periodically to ensure continued alignment with internationally accepted standards of publication ethics and scholarly publishing.
        </p>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      <PageHero
        title="Conflict of Interest Policy"
        subtitle="Comprehensive standards and disclosure guidelines for authors, reviewers, editors, and publishers to safeguard objectivity and trust in scholarly publishing."
        badge="Publication Transparency & Integrity"
        breadcrumbs={[
          { name: 'Policies', path: '/ethics-policy' },
          { name: 'Conflict of Interest' }
        ]}
      />


      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-8 text-left">
        {sections.map((sec) => (
          <div
            key={sec.num}
            className="academic-card bg-white rounded-3xl p-6 sm:p-8 space-y-4 relative overflow-hidden"
          >
            <div
              className={`absolute top-0 left-6 right-6 h-1 rounded-b-full ${sec.color === 'amber'
                ? 'bg-gradient-to-r from-amber-400 to-amber-600'
                : 'bg-gradient-to-r from-blue-600 to-[#0f4a85]'
                }`}
            />

            <div className="flex items-center space-x-3">
              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${sec.color === 'amber'
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

        {/* CTA Strip */}
        {/* <div className="academic-card rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[#0f4a85] to-[#0f4a85] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-[#0f4a85]">Have questions regarding disclosures?</h4>
            <p className="text-xs text-slate-700">
              Review our complete Publication Ethics Policy or contact the editorial office for guidance.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/ethics-policy"
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-500 btn-gold-shadow transition-all flex items-center space-x-1.5"
            >
              <span>Publication Ethics</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
}
