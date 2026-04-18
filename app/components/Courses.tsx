import React from 'react';
import { ArrowRight, CheckCircle2, Server, Cloud } from 'lucide-react';

const syllabusModules = [
  { module: 1, title: "Datacenter Fundamentals", topics: ["What is a Datacenter", "Types of Datacenters", "Datacenter Architecture", "Physical Components", "Power, Cooling, & Rack Design"] },
  { module: 2, title: "Compute (Servers)", topics: ["Server Types", "CPU, Memory, Disk Basics", "Operating Systems", "Virtualization Concepts", "Hypervisors"] },
  { module: 3, title: "Storage Systems", topics: ["Storage Basics", "RAID Concepts", "SAN vs NAS", "Storage Protocols", "Backup Concepts"] },
  { module: 4, title: "Networking Fundamentals", topics: ["OSI Model", "IP Addressing", "Subnets and CIDR", "VLAN Concepts", "Switching and Routing", "DNS and DHCP"] },
  { module: 5, title: "Identity & Core Services", topics: ["Active Directory Concepts", "Domain, Forest, OU Structure", "Group Policy", "Authentication & Authorization", "DNS Integration"] },
  { module: 6, title: "Enterprise Services", topics: ["Email Systems", "File Servers", "Print Services", "Monitoring", "Patch Management"] },
  { module: 7, title: "Datacenter Operations", topics: ["Incident Management", "Change Management", "Capacity Planning", "Performance Monitoring", "Hardware Maintenance"] },
  { module: 8, title: "Migration Fundamentals", topics: ["Cloud Migration Basics", "Migration Strategies", "Assessment", "Dependency Mapping", "Cutover Planning"] },
  { module: 9, title: "Cloud Computing Basics", topics: ["What is Cloud", "IaaS, PaaS, SaaS", "Cloud Types", "Benefits"] },
  { module: 10, title: "Azure Core Concepts", topics: ["Azure Overview", "Regions & Availability Zones", "Resource Groups", "ARM"] },
  { module: 11, title: "Azure Compute", topics: ["Virtual Machines", "VM Sizes", "Availability Sets", "App Services"] },
  { module: 12, title: "Azure Storage", topics: ["Storage Accounts", "Blob Storage", "File Storage", "Disk Storage", "Redundancy"] },
  { module: 13, title: "Azure Networking", topics: ["Virtual Networks", "Subnets", "NSG", "Load Balancer", "VPN Gateway", "Private Endpoints"] },
  { module: 14, title: "Azure Identity", topics: ["Microsoft Entra ID", "Users and Groups", "RBAC", "MFA"] },
  { module: 15, title: "Security & Governance", topics: ["Security Basics", "Azure Policy", "Azure Monitor", "Log Analytics"] },
  { module: 16, title: "Cost Management", topics: ["Pricing Models", "Cost Estimation", "Budgets"] },
  { module: 17, title: "Migration to Azure", topics: ["Azure Migrate", "VM Migration", "Database Migration", "Hybrid Connectivity"] },
  { module: 18, title: "Hands-on Labs", topics: ["Create VM", "Configure VNet", "Deploy Web App", "Setup Storage", "Monitoring"] }
];

export default function Courses() {
    return (
    <section id="courses" className="py-12 md:py-20 bg-gray-50 dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-primary/20">Flagship Program</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white leading-tight">
            Datacenter to <span className="text-gradient">Azure Fundamentals</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400">
            A comprehensive, 18-module journey taking you from core on-premise datacenter infrastructure all the way to advanced Microsoft Azure cloud architecture and migration.
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-12 md:mb-16">
            <div className="bg-white dark:bg-card-dark p-4 md:p-6 rounded-2xl border border-gray-100 dark:border-gray-800 text-center shadow-sm">
                <span className="text-3xl font-black text-slate-900 dark:text-white block mb-1">18</span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500">Modules</span>
            </div>
            <div className="bg-white dark:bg-card-dark p-4 md:p-6 rounded-2xl border border-gray-100 dark:border-gray-800 text-center shadow-sm">
                <span className="text-3xl font-black text-slate-900 dark:text-white block mb-1">85+</span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500">Core Topics</span>
            </div>
            <div className="bg-white dark:bg-card-dark p-4 md:p-6 rounded-2xl border border-gray-100 dark:border-gray-800 text-center shadow-sm">
                <Server className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2" />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500">On-Prem Focus</span>
            </div>
            <div className="bg-white dark:bg-card-dark p-4 md:p-6 rounded-2xl border border-gray-100 dark:border-gray-800 text-center shadow-sm">
                <Cloud className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2" />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500">Azure Mastery</span>
            </div>
        </div>

        {/* Syllabus Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {syllabusModules.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-card-dark rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4 border-b border-gray-50 dark:border-gray-800 pb-4">
                <div className="bg-primary/10 text-primary w-10 h-10 rounded-lg flex items-center justify-center font-black text-lg group-hover:bg-primary group-hover:text-white transition-colors">
                  {item.module}
                </div>
                <h3 className="text-base font-black text-slate-900 dark:text-white leading-tight">
                    {item.title}
                </h3>
              </div>
              
              <ul className="space-y-2.5">
                {item.topics.map((topic, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary/60 mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors">
                            {topic}
                        </span>
                    </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center w-full px-0 sm:px-4">
          <a href="#register" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/25 hover:shadow-xl transition-all text-xs sm:text-sm uppercase tracking-widest hover-lift">
            Enroll in this Masterclass <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
