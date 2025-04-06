
import React from 'react';
import Header from '@/components/Header';
import FraudSection from '@/components/FraudSection';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-navy to-dark">
      <Header />
      
      <main className="container mx-auto px-4 md:px-8 pb-24">
        <div className="max-w-4xl mx-auto space-y-12 py-12">
          <FraudSection
            id="evolving-techniques"
            title="Rising Fraud Techniques"
            description="The constantly evolving landscape of digital fraud"
            content={
              <>
                <p>
                  Cybercriminals are continuously developing more sophisticated methods to bypass traditional security measures. 
                  Modern attacks employ a combination of technical exploitation, social engineering, and artificial intelligence 
                  to create increasingly convincing and difficult-to-detect fraud attempts.
                </p>
                
                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Key Emerging Techniques:</h3>
                
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium text-white">Deepfake Technology:</span> AI-generated video and audio that can convincingly 
                    impersonate executives, customers, or trusted entities to facilitate fraudulent activities.
                  </li>
                  <li>
                    <span className="font-medium text-white">Advanced Phishing:</span> Hyper-personalized attacks that leverage data from 
                    multiple breaches to create contextually relevant deception targeting specific individuals.
                  </li>
                  <li>
                    <span className="font-medium text-white">API Vulnerabilities:</span> Exploiting weaknesses in application programming 
                    interfaces that connect different services and systems, allowing attackers to intercept data or inject malicious code.
                  </li>
                  <li>
                    <span className="font-medium text-white">Synthetic Identity Fraud:</span> Creating fictitious identities by combining 
                    real and fabricated personal information to establish seemingly legitimate accounts for fraudulent purposes.
                  </li>
                  <li>
                    <span className="font-medium text-white">Supply Chain Attacks:</span> Targeting smaller, less-secure vendors and partners 
                    to gain access to larger organizations' networks and data.
                  </li>
                </ul>
                
                <p className="mt-6">
                  These techniques are particularly dangerous because they exploit both technological vulnerabilities and human psychology, 
                  making traditional security training and tools increasingly insufficient without continual updates and adaptations.
                </p>
              </>
            }
          />
          
          <FraudSection
            id="financial-losses"
            title="Increasing Financial Losses"
            description="The staggering economic impact of digital fraud"
            content={
              <>
                <p>
                  The financial impact of digital fraud continues to grow at an alarming rate. Organizations worldwide 
                  lose billions annually, with the average data breach reaching $4.35 million in 2023 – representing 
                  a 12.7% increase from costs reported in 2020.
                </p>
                
                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Financial Impact Breakdown:</h3>
                
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium text-white">Direct Monetary Theft:</span> Unauthorized transactions, 
                    fraudulent payments, and direct theft from accounts amount to over $50 billion globally each year.
                  </li>
                  <li>
                    <span className="font-medium text-white">Recovery and Response Costs:</span> Organizations spend an average of 
                    $1.2 million just on recovery activities following a successful attack, including forensics, 
                    system repairs, and data restoration.
                  </li>
                  <li>
                    <span className="font-medium text-white">Regulatory Fines:</span> Non-compliance penalties for data breaches 
                    can reach up to 4% of global annual revenue under regulations like GDPR, with the average fine exceeding $1.7 million.
                  </li>
                  <li>
                    <span className="font-medium text-white">Operational Disruption:</span> Business downtime following an attack 
                    averages 21 days, with associated productivity losses and opportunity costs often exceeding the direct theft amount.
                  </li>
                  <li>
                    <span className="font-medium text-white">Long-term Market Impact:</span> Companies experience an average 7.5% stock 
                    price drop following a major breach announcement, with recovery taking up to 14 months.
                  </li>
                </ul>
                
                <p className="mt-6">
                  Small and medium businesses are particularly vulnerable, with 60% closing within six months of a major 
                  security breach due to inability to absorb these substantial financial impacts. The insurance industry 
                  has responded with increasingly expensive cyber-liability policies, with premiums rising by an average 
                  of 28% annually since 2020.
                </p>
              </>
            }
          />
          
          <FraudSection
            id="user-trust"
            title="Damaged User Trust"
            description="The devastating impact of security breaches on customer relationships"
            content={
              <>
                <p>
                  The damage to customer trust following security incidents represents one of the most significant 
                  long-term costs to businesses. When security breaches occur, customer trust plummets dramatically—with 
                  studies showing that 60% of consumers stop doing business with companies after experiencing just a single 
                  security incident.
                </p>
                
                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Trust Impact Metrics:</h3>
                
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium text-white">Customer Abandonment:</span> Beyond the initial 60% who leave immediately, 
                    an additional 22% gradually reduce their engagement over the following 12 months.
                  </li>
                  <li>
                    <span className="font-medium text-white">Reputation Damage:</span> Companies experience an average 31% reduction in 
                    positive brand sentiment following a publicized breach, with effects lasting 18-24 months.
                  </li>
                  <li>
                    <span className="font-medium text-white">Acquisition Challenges:</span> Cost of acquiring new customers increases 
                    by 23% on average after a significant security incident, as prospects become more cautious.
                  </li>
                  <li>
                    <span className="font-medium text-white">Competitive Vulnerability:</span> 86% of customers report being more likely 
                    to choose competitors with stronger security reputations, even if their products or services are slightly more expensive.
                  </li>
                  <li>
                    <span className="font-medium text-white">Social Impact:</span> Negative social media sentiment spreads 3x faster 
                    following security issues compared to product failures or service problems.
                  </li>
                </ul>
                
                <p className="mt-6">
                  Rebuilding trust after a breach requires substantial investment in transparency, communication, and security 
                  improvements. Organizations that demonstrate accountability, provide clear explanations of incidents, and 
                  implement visible security enhancements recover approximately 35% faster than those who minimize issues or 
                  delay disclosure. The most effective trust recovery programs include compensation for affected customers, 
                  external security audits, and regular updates on remediation efforts.
                </p>
              </>
            }
          />
          
          <FraudSection
            id="regulatory-compliance"
            title="Regulatory Compliance Risk"
            description="The legal and regulatory consequences of data protection failures"
            content={
              <>
                <p>
                  Organizations that fail to adequately protect user data face severe penalties under an increasingly complex 
                  web of regulations. Beyond monetary fines, companies can face operational restrictions, mandatory audits, 
                  and even criminal prosecution for executives in cases of willful negligence.
                </p>
                
                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Key Regulatory Frameworks:</h3>
                
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium text-white">GDPR (EU):</span> Penalties up to €20 million or 4% of global annual 
                    revenue, whichever is higher. Also includes potential liability for EU representatives and data protection officers.
                  </li>
                  <li>
                    <span className="font-medium text-white">CCPA/CPRA (California):</span> Fines of $2,500 per violation or $7,500 per 
                    intentional violation, with no upper cap when multiplied across large customer bases. Also grants consumers private 
                    right of action.
                  </li>
                  <li>
                    <span className="font-medium text-white">HIPAA (US Healthcare):</span> Tiered penalty structure up to $1.5 million 
                    per violation category per year, plus potential criminal charges for knowing violations.
                  </li>
                  <li>
                    <span className="font-medium text-white">PCI DSS:</span> Non-compliance can result in fines from $5,000 to $100,000 
                    per month until remediation, plus increased transaction fees and potential loss of processing privileges.
                  </li>
                  <li>
                    <span className="font-medium text-white">Sector-Specific Regulations:</span> Financial institutions face additional 
                    requirements under frameworks like GLBA, SOX, and various international banking regulations, while critical 
                    infrastructure is increasingly subject to mandatory breach reporting and minimum security standards.
                  </li>
                </ul>
                
                <p className="mt-6">
                  The regulatory landscape continues to evolve rapidly, with over 120 countries now having enacted data protection laws. 
                  Organizations operating globally may need to comply with dozens of different regulatory frameworks simultaneously, 
                  creating complex compliance requirements. The average multinational company spends between $3.5 million and $8 million 
                  annually just on privacy compliance, with costs escalating sharply following incidents.
                </p>
                
                <p className="mt-4">
                  Recent trends indicate a move toward more aggressive enforcement, shorter notification windows (some as brief as 
                  72 hours), and greater international coordination between regulatory bodies. Companies must increasingly demonstrate 
                  "privacy by design" and "security by default" as proactive measures rather than relying on reactive compliance efforts.
                </p>
              </>
            }
          />
        </div>
        
        <div className="fixed bottom-6 right-6">
          <Button
            onClick={scrollToTop}
            className="rounded-full w-12 h-12 bg-dark-accent hover:bg-dark-accent/80"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-6 w-6" />
          </Button>
        </div>
      </main>
      
      <footer className="py-6 px-4 border-t border-dark-accent/30 bg-dark">
        <div className="container mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} Digital Fraud Awareness | For Learning - DarkWave Inc - Aritra</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
