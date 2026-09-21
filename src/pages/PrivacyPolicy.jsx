import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Lock,
  UserCheck,
  Eye,
  Database,
  FileText,
  Cookie,
  Server,
  Globe,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowUpRight,
  Mail,
  Scale,
  RefreshCw,
  Cpu
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { journalInfo } from '../data/journalDocData';

export default function PrivacyPolicy() {
  const sections = [
    {
      num: '01',
      title: 'Introduction & Scope',
      icon: <ShieldCheck className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
          <p>
            The <span className="font-bold text-[#0f4a85]">{journalInfo.fullName} ({journalInfo.acronym})</span> is committed to protecting the privacy and confidentiality of authors, reviewers, editors, readers, and website visitors.
          </p>
          <p>
            This Privacy Policy explains how personal information is collected, used, stored, disclosed, and protected when individuals interact with the journal's website, manuscript submission system, peer-review process, and related editorial services. By using the {journalInfo.acronym} website or submitting a manuscript, users acknowledge that they have read and understood this Privacy Policy.
          </p>
          <div className="p-4 bg-blue-50/80 border border-blue-200 rounded-2xl space-y-2">
            <span className="text-xs font-bold text-[#0f4a85] uppercase tracking-wider block">Applicability</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-700">
              {[
                'Website visitors',
                'Authors & Co-authors',
                'Corresponding authors',
                'Peer reviewers',
                'Editors & Board members',
                'Readers & Subscribers',
                'Editorial communicators'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 bg-white/80 p-2 rounded-lg border border-blue-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      num: '02',
      title: 'Information We Collect',
      icon: <Database className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-slate-700 leading-relaxed">
            The journal collects only information strictly necessary for academic evaluation, publication management, and technical delivery:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {/* Personal Info */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-[#0f4a85] font-bold pb-1 border-b border-slate-200">
                  <UserCheck className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className="text-xs uppercase tracking-wider">Personal Information</span>
                </div>
                <ul className="space-y-1.5 pt-2 text-slate-600">
                  {[
                    'Full name & title',
                    'Institutional affiliation & department',
                    'Professional designation',
                    'Official & contact email address',
                    'Postal address (where required)',
                    'Telephone number (optional)',
                    'ORCID iD (if provided)',
                    'Country of residence',
                    'Academic profile & biography'
                  ].map((p, i) => (
                    <li key={i} className="flex items-start space-x-1.5">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Manuscript Info */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-[#0f4a85] font-bold pb-1 border-b border-slate-200">
                  <FileText className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="text-xs uppercase tracking-wider">Manuscript Information</span>
                </div>
                <ul className="space-y-1.5 pt-2 text-slate-600">
                  {[
                    'Manuscript title, abstract & keywords',
                    'Author contribution details',
                    'Reviewer reports & comments',
                    'Editorial correspondence & timestamps',
                    'Publication history & version records',
                    'Funding & grant disclosures',
                    'Conflict of interest declarations'
                  ].map((m, i) => (
                    <li key={i} className="flex items-start space-x-1.5">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technical Info */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-[#0f4a85] font-bold pb-1 border-b border-slate-200">
                  <Cpu className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs uppercase tracking-wider">Technical Data</span>
                </div>
                <ul className="space-y-1.5 pt-2 text-slate-600">
                  {[
                    'IP address & network logs',
                    'Browser type & device specifications',
                    'Operating system configuration',
                    'Referring pages & access timestamps',
                    'Website session performance data',
                    'Aggregated traffic analytics'
                  ].map((t, i) => (
                    <li key={i} className="flex items-start space-x-1.5">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      num: '03',
      title: 'Purpose of Data Collection & Legal Grounds',
      icon: <Scale className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-slate-700 leading-relaxed">
            Personal data is collected strictly for legitimate publishing, peer-review oversight, and administrative governance:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
            {[
              'Processing manuscript submissions and editorial evaluation',
              'Facilitating confidential peer-review workflows',
              'Communicating editorial revisions, acceptance, or decisions',
              'Publishing accepted articles and generating scholarly metadata',
              'Registering DOIs and archiving scholarly records',
              'Managing expert reviewer selection and editorial board correspondence',
              'Responding to inquiries, complaints, or appeals',
              'Ensuring website security, audit trails, and abuse prevention',
              'Complying with legal, ethical, and COPE regulatory standards'
            ].map((purp, idx) => (
              <div key={idx} className="flex items-start space-x-2 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-slate-700">{purp}</span>
              </div>
            ))}
          </div>

          <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-2xl text-xs text-blue-950">
            <strong>Legal Basis:</strong> Data is processed based on user consent, performance of academic publication contracts, legitimate interests in maintaining scholarly record integrity, and legal/ethical compliance.
          </div>
        </div>
      )
    },
    {
      num: '04',
      title: 'Use, Sharing & Non-Commercial Commitment',
      icon: <Lock className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-2xl">
            <span className="text-xs font-bold text-emerald-950 uppercase tracking-wider block mb-1">
              Zero-Sale Guarantee
            </span>
            <p className="text-xs text-emerald-900 leading-relaxed">
              <strong>{journalInfo.acronym} does NOT sell, rent, lease, or trade personal data</strong> to third parties or commercial marketing entities under any circumstances.
            </p>
          </div>
          <p className="text-xs text-slate-600">
            Information is disclosed strictly on a need-to-know basis solely for:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-medium text-slate-800">
            <div className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-center">Editorial Processing</div>
            <div className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-center">DOI Registration</div>
            <div className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-center">Abstracting & Indexing</div>
            <div className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-center">Digital Archiving</div>
          </div>
        </div>
      )
    },
    {
      num: '05',
      title: 'Peer Review Confidentiality & Author Public Data',
      icon: <Eye className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-2xl space-y-2">
            <h4 className="text-xs font-bold text-[#0f4a85] uppercase tracking-wider">Double-Blind Review Safeguards</h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              {journalInfo.acronym} enforces strict Double-Blind Peer Review. Reviewer identities remain permanently confidential, and author identities are withheld from referees during evaluation. Unpublished manuscripts must never be quoted, shared, or exploited.
            </p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
            <h4 className="text-xs font-bold text-[#0f4a85] uppercase tracking-wider">Published Author Metadata</h4>
            <p className="text-xs text-slate-700">
              Upon publication, only information essential for the scholarly record appears in the published article:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
              <span className="flex items-center space-x-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /><span>Author full names & affiliations</span></span>
              <span className="flex items-center space-x-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /><span>Corresponding author email</span></span>
              <span className="flex items-center space-x-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /><span>ORCID iD & grant funding details</span></span>
              <span className="flex items-center space-x-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /><span>Conflict of interest & contribution statements</span></span>
            </div>
          </div>
        </div>
      )
    },
    {
      num: '06',
      title: 'Cookies, Analytics & Data Security',
      icon: <Cookie className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
          <p>
            Cookies and session tokens are utilized solely to ensure seamless portal navigation, maintain authenticated sessions, and collect anonymous aggregate website analytics. Users may configure their browser to reject cookies, though certain interactive features may be limited.
          </p>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
            <h4 className="text-xs font-bold text-[#0f4a85] uppercase tracking-wider">Security Measures</h4>
            <p className="text-xs text-slate-600">
              We implement comprehensive administrative, electronic, and physical safeguards against unauthorized access, alteration, disclosure, or destruction of personal data.
            </p>
          </div>
        </div>
      )
    },
    {
      num: '07',
      title: 'Data Retention & Third-Party Service Providers',
      icon: <Server className="w-5 h-5" />,
      color: 'blue',
      content: (
        <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
          <p>
            Personal data is retained only for as long as necessary to manage editorial workflows, meet regulatory/legal obligations, and maintain the permanent scholarly record. Published metadata is preserved perpetually in indexing and preservation archives.
          </p>
          <p className="text-xs text-slate-600">
            Trusted third-party providers (e.g., submission platforms, Crossref DOI registration, digital archiving repositories, plagiarism screening systems) process data strictly in accordance with confidentiality contracts and security standards.
          </p>
        </div>
      )
    },
    {
      num: '08',
      title: 'User Rights & Contact Information',
      icon: <UserCheck className="w-5 h-5" />,
      color: 'amber',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-slate-700 leading-relaxed">
            In accordance with applicable data protection laws, users have rights to:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            {[
              'Request access to their personal records',
              'Request correction of inaccurate information',
              'Request deletion where appropriate',
              'Request restriction or object to processing',
              'Withdraw consent where processing is based on consent',
              'Request information on personal data handling'
            ].map((r, i) => (
              <div key={i} className="flex items-center space-x-2 p-2 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{r}</span>
              </div>
            ))}
          </div>

          <div className="p-4 bg-gradient-to-r from-blue-50 to-amber-50 border border-blue-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-[#0f4a85] block">Editorial Office Inquiries</span>
              <p className="text-xs text-slate-600">
                Submit privacy requests directly to the Editorial Office at <span className="font-semibold text-slate-800">editorial.office@ijmar.org</span>.
              </p>
            </div>
            <Link
              to="/about"
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors shrink-0 flex items-center space-x-1"
            >
              <span>Contact Office</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      <PageHero
        title="Privacy Policy"
        subtitle="Transparent policies governing data collection, usage, author metadata, double-blind confidentiality, and subscriber data protection."
        badge="Data Protection & Privacy"
        breadcrumbs={[
          { name: 'Policies', path: '/ethics-policy' },
          { name: 'Privacy Policy' }
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
