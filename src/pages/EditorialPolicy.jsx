import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Target,
  ShieldCheck,
  Users,
  FileSearch,
  CheckCircle2,
  Scale,
  Eye,
  Lock,
  AlertTriangle,
  Clock,
  Bot,
  MessageSquare,
  RefreshCw,
  Globe,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { journalInfo } from '../data/journalDocData';

const editorialTimelines = [
  { stage: 'Initial Editorial Screening', time: '5–7 days', desc: 'Scope, formatting & preliminary quality check' },
  { stage: 'Reviewer Invitation', time: '3–5 days', desc: 'Selecting & securing 2+ independent peer reviewers' },
  { stage: 'Peer Review', time: '2–4 weeks', desc: 'In-depth double-blind technical & methodological review' },
  { stage: 'Editorial Decision', time: 'Within 1 week', desc: 'Issued after receipt of all referee evaluations' },
  { stage: 'Online Publication After Acceptance', time: 'Continuous Fast-Track', desc: 'Published immediately upon production completion' }
];

export default function EditorialPolicy() {
  const sections = [
    {
      num: '01',
      title: 'Policy Statement',
      icon: <ShieldCheck className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            The <span className="font-bold text-[#0f4a85]">{journalInfo.fullName} ({journalInfo.acronym})</span> is committed to maintaining the highest standards of scholarly publishing through a transparent, impartial, ethical, and rigorous editorial process.
          </p>
          <p>
            The Editorial Board is responsible for ensuring that all published articles meet internationally accepted standards of scientific quality, originality, integrity, and ethical conduct. Editorial decisions are based solely on the academic merit of submitted manuscripts.
          </p>
        </div>
      )
    },
    {
      num: '02',
      title: 'Editorial Objectives',
      icon: <Target className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3">
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            The editorial objectives of {journalInfo.acronym} are to:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
            {[
              'Publish original, high-quality research in science, engineering, and emerging technologies.',
              'Promote innovation and interdisciplinary research.',
              'Ensure fairness, transparency, and consistency throughout the editorial process.',
              'Uphold the highest standards of publication ethics.',
              'Maintain the integrity of the scholarly record.',
              'Encourage reproducible and ethically conducted research.'
            ].map((obj, idx) => (
              <div key={idx} className="flex items-start space-x-2 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{obj}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      num: '03',
      title: 'Editorial Independence',
      icon: <Scale className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>Editorial decisions are made independently and are not influenced by:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {[
              'Commercial interests or revenue generation.',
              'Advertising or corporate sponsorship.',
              'Institutional affiliations of authors or editors.',
              'Political or religious views.',
              'Nationality, ethnicity, gender, age, or personal characteristics of the authors.'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2 p-2 bg-blue-50/60 rounded-xl border border-blue-100 text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0f4a85] mt-1.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs font-semibold text-[#0f4a85] bg-blue-50 p-3 rounded-xl border border-blue-200">
            The Editor-in-Chief has full authority over editorial decisions and final publication outcomes.
          </p>
        </div>
      )
    },
    {
      num: '04',
      title: 'Editorial Structure',
      icon: <Users className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>The editorial management of {journalInfo.acronym} consists of:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            {[
              { role: 'Editor-in-Chief', desc: 'Overall academic & publication leadership' },
              { role: 'Associate Editors', desc: 'Subject-specific editorial coordination' },
              { role: 'Editorial Board Members', desc: 'Peer review & scholarly oversight' },
              { role: 'Managing Editor', desc: 'Workflow & operational execution' },
              { role: 'Editorial Office', desc: 'Author & reviewer liaison desk' }
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="font-bold text-[#0f4a85] block mb-1">{item.role}</span>
                <span className="text-[11px] text-slate-500 leading-tight block">{item.desc}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 italic mt-1">
            Each editor is expected to perform duties with professionalism, confidentiality, impartiality, and integrity.
          </p>
        </div>
      )
    },
    {
      num: '05',
      title: 'Scope Evaluation',
      icon: <FileSearch className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            Upon submission, every manuscript undergoes an initial editorial assessment to determine whether it:
          </p>
          <ul className="space-y-1.5 text-xs text-slate-700 pl-2">
            {[
              "Falls within the journal's multidisciplinary scope.",
              'Meets minimum scientific and technical standards.',
              'Complies with the Author Guidelines and formatting requirements.',
              'Satisfies ethical and publication requirements.',
              'Is written in clear and understandable English.'
            ].map((pt, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-500 italic">
            Manuscripts that fail to meet these requirements may be returned to the authors for revision or declined without external review.
          </p>
        </div>
      )
    },
    {
      num: '06',
      title: 'Initial Quality Screening',
      icon: <ShieldCheck className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>Before peer review, manuscripts are rigorously evaluated for:</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            {[
              'Originality & Novelty',
              'Scientific Significance',
              'Technical Accuracy',
              'Completeness',
              'Formatting Compliance',
              'Ethical Approval (IRB)',
              'Plagiarism & Similarity',
              'Valid Citations'
            ].map((crit, idx) => (
              <div key={idx} className="p-2.5 bg-amber-50/70 border border-amber-200/80 rounded-xl text-center font-medium text-amber-950">
                {crit}
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-600">
            Only manuscripts meeting these preliminary criteria proceed to full peer review.
          </p>
        </div>
      )
    },
    {
      num: '07',
      title: 'Editorial Decision-Making',
      icon: <Scale className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-slate-700 leading-relaxed">
            Editorial decisions are based exclusively on scientific merit, methodological rigor, reviewer recommendations, and ethical compliance:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            {[
              { type: 'Accept', desc: 'Paper is accepted for publication as submitted or with minor stylistic polish.', color: 'emerald' },
              { type: 'Minor Revision', desc: 'Requires minor textual, clarification, or referencing improvements.', color: 'blue' },
              { type: 'Major Revision', desc: 'Requires substantial additional data, analysis, or methodological rework.', color: 'amber' },
              { type: 'Reject', desc: 'Fails to meet scientific standards, scope, novelty, or ethical criteria.', color: 'red' }
            ].map((dec, idx) => (
              <div
                key={idx}
                className={`p-3.5 rounded-2xl border ${dec.color === 'emerald' ? 'bg-emerald-50 border-emerald-200 text-emerald-900' :
                  dec.color === 'blue' ? 'bg-blue-50 border-blue-200 text-blue-900' :
                    dec.color === 'amber' ? 'bg-amber-50 border-amber-200 text-amber-900' :
                      'bg-red-50 border-red-200 text-red-900'
                  }`}
              >
                <span className="font-bold text-sm block mb-1">{dec.type}</span>
                <span className="text-[11px] leading-tight block opacity-90">{dec.desc}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 italic">
            The Editor-in-Chief is responsible for the final decision on all submitted manuscripts.
          </p>
        </div>
      )
    },
    {
      num: '08',
      title: 'Peer Review',
      icon: <Eye className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            {journalInfo.acronym} follows a strict <span className="font-bold text-[#0f4a85]">Double-Blind Peer Review</span> process:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
            {[
              'At least two independent subject experts evaluate each manuscript.',
              'Reviewer identities remain strictly confidential.',
              'Author identities are concealed from reviewers.',
              'Editors consider referee reports before rendering decisions.',
              'If referee recommendations diverge significantly, an additional review is sought.'
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
      num: '09',
      title: 'Editorial Responsibilities',
      icon: <ShieldCheck className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <p className="mb-2">Editors are expected to:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            {[
              'Evaluate manuscripts fairly and objectively without bias.',
              'Maintain confidentiality throughout the editorial process.',
              'Select qualified and unbiased expert reviewers.',
              'Avoid actual, potential, or perceived conflicts of interest.',
              'Ensure timely and efficient editorial decisions.',
              'Promote ethical research and publication practices.',
              'Handle allegations of misconduct transparently and appropriately.',
              'Safeguard the integrity of the published scholarly record.'
            ].map((resp, idx) => (
              <div key={idx} className="flex items-start space-x-2 p-2 bg-blue-50/50 rounded-xl border border-blue-100">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0f4a85] mt-1.5 shrink-0" />
                <span>{resp}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      num: '10',
      title: 'Ethical Standards',
      icon: <Lock className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            Editors shall ensure that all submissions comply with the journal's policies on:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-center font-medium">
            {[
              'Publication Ethics',
              'Plagiarism Detection',
              'Authorship Criteria',
              'Conflicts of Interest',
              'Research Integrity',
              'Human & Animal Ethics',
              'Data Integrity',
              'Copyright & Licensing'
            ].map((std, idx) => (
              <div key={idx} className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800">
                {std}
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 italic">
            Suspected misconduct will be investigated in accordance with COPE guidelines and established procedures.
          </p>
        </div>
      )
    },
    {
      num: '11',
      title: 'Confidentiality',
      icon: <Lock className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            Editors and Editorial Board members shall treat all submitted manuscripts as strictly confidential documents. Information obtained during the editorial process shall not be:
          </p>
          <ul className="space-y-1.5 text-xs text-slate-700 pl-2">
            {[
              'Shared with unauthorized individuals or third parties.',
              'Used for personal research or academic advantage.',
              'Used for commercial advantage.',
              'Disclosed publicly before official publication.'
            ].map((pt, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-500 italic">
            Confidentiality obligations continue indefinitely after the editorial process has concluded.
          </p>
        </div>
      )
    },
    {
      num: '12',
      title: 'Conflict of Interest',
      icon: <Scale className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            Editors must disclose any actual, potential, or perceived conflicts of interest (financial, personal, institutional, collaborative, or competitive).
          </p>
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950 font-medium">
            Editors with a conflict of interest must recuse themselves from handling the affected manuscript, and another qualified editor will be assigned immediately.
          </div>
        </div>
      )
    },
    {
      num: '13',
      title: 'Editorial Timeliness',
      icon: <Clock className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-slate-700 leading-relaxed">
            {journalInfo.acronym} aims to provide an efficient and responsive editorial process without compromising peer review rigor:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-[#0f4a85] text-white">
                  <th className="px-4 py-3 font-bold uppercase tracking-wider">Editorial Stage</th>
                  <th className="px-4 py-3 font-bold uppercase tracking-wider">Target Timeline</th>
                  <th className="px-4 py-3 font-bold uppercase tracking-wider hidden sm:table-cell">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {editorialTimelines.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50/70' : 'bg-white'}>
                    <td className="px-4 py-3 font-semibold text-slate-800">{row.stage}</td>
                    <td className="px-4 py-3 font-bold text-[#0f4a85] whitespace-nowrap">{row.time}</td>
                    <td className="px-4 py-3 text-slate-500 hidden sm:table-cell">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 italic">
            These timelines are indicative and may vary depending on manuscript complexity and reviewer availability.
          </p>
        </div>
      )
    },
    {
      num: '14',
      title: 'Artificial Intelligence (AI)',
      icon: <Bot className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            Editors may use AI-assisted tools for administrative or language-support purposes where appropriate. However:
          </p>
          <ul className="space-y-1.5 text-xs text-slate-700 pl-2">
            {[
              'AI tools shall not replace independent editorial judgment.',
              'AI systems shall not make publication decisions.',
              'Editors remain fully responsible for all editorial decisions.',
              'Manuscript confidentiality must be strictly protected when using technological tools.'
            ].map((pt, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      num: '15',
      title: 'Appeals and Complaints',
      icon: <MessageSquare className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            Authors who disagree with an editorial decision may submit a written appeal <span className="font-bold text-[#0f4a85]">within 30 days</span> of receiving the decision. Appeals should include:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800">
              1. Manuscript ID number
            </div>
            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800">
              2. Detailed justification
            </div>
            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800">
              3. Supporting evidence
            </div>
          </div>
          <p className="text-xs text-slate-600">
            Appeals are reviewed by the Editor-in-Chief and unconflicted board members. The outcome of the appeal is final.
          </p>
        </div>
      )
    },
    {
      num: '16',
      title: 'Corrections and Retractions',
      icon: <AlertTriangle className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            Where significant errors or ethical concerns are identified after publication, {journalInfo.acronym} may publish:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-semibold text-center">
            <div className="p-2.5 bg-blue-50 text-blue-800 border border-blue-200 rounded-xl">Errata</div>
            <div className="p-2.5 bg-blue-50 text-blue-800 border border-blue-200 rounded-xl">Corrigenda</div>
            <div className="p-2.5 bg-amber-50 text-amber-800 border border-amber-200 rounded-xl">Expressions of Concern</div>
            <div className="p-2.5 bg-red-50 text-red-800 border border-red-200 rounded-xl">Retractions</div>
          </div>
          <p className="text-xs text-slate-500 italic">
            Such actions are taken transparently to preserve the accuracy and integrity of the scholarly record.
          </p>
        </div>
      )
    },
    {
      num: '17',
      title: 'Editorial Transparency',
      icon: <Globe className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            The journal is committed to full transparency by publicly providing information about:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-700">
            {[
              'Editorial Board affiliations',
              'Peer review workflow',
              'Publication ethics policies',
              'Copyright & licensing',
              'Open Access terms',
              'Author guidelines & APCs'
            ].map((item, idx) => (
              <div key={idx} className="p-2 bg-slate-50 rounded-xl border border-slate-200 text-center font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      num: '18',
      title: 'Continuous Improvement',
      icon: <RefreshCw className="w-5 h-5" />,
      color: 'amber',
      content: (
        <p className="text-sm text-slate-700 leading-relaxed">
          The Editorial Board regularly reviews the journal's editorial policies, timelines, and workflows to improve publication quality, enhance efficiency, strengthen research integrity, and adopt evolving international best practices in scholarly publishing.
        </p>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      <PageHero
        title="Editorial Policy"
        subtitle="Complete framework governing editorial management, peer review standards, decision criteria, ethical oversight, and publication timeliness."
        badge="Editorial Governance & Standards"
        breadcrumbs={[
          { name: 'Policies', path: '/editorial-policy' },
          { name: 'Editorial Policy' }
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
            <h4 className="text-base sm:text-lg font-bold text-[#0f4a85]">Interested in the Peer Review process?</h4>
            <p className="text-xs text-slate-700">
              Explore our detailed double-blind evaluation standards, criteria, and referee guidance.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/peer-review-policy"
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-500 btn-gold-shadow transition-all flex items-center space-x-1.5"
            >
              <span>Peer Review Policy</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
}
