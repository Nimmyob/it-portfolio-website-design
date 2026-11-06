export const profile = {
  name: 'Nimmy O B',
  role: 'IT Professional & Aspiring DevOps Engineer',
  location: 'Open to remote & on-site roles',
  email: 'nimmy.ob@example.com',
  linkedin: 'https://www.linkedin.com/in/your-profile',
  github: 'https://github.com/your-username',
}

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export type SkillKey =
  | 'linux'
  | 'python'
  | 'networking'
  | 'azure'
  | 'docker'
  | 'kubernetes'
  | 'devops'

export const skills: {
  key: SkillKey
  name: string
  level: number
  description: string
  tags: string[]
}[] = [
  {
    key: 'linux',
    name: 'Linux',
    level: 80,
    description: 'System administration, shell scripting, users, permissions and services.',
    tags: ['Bash', 'Ubuntu', 'RHEL', 'systemd', 'cron'],
  },
  {
    key: 'python',
    name: 'Python',
    level: 75,
    description: 'Automation scripts, file handling, APIs and system monitoring tools.',
    tags: ['Scripting', 'psutil', 'requests', 'OOP'],
  },
  {
    key: 'networking',
    name: 'Computer Networking',
    level: 70,
    description: 'TCP/IP, subnetting, DNS, DHCP, routing basics and troubleshooting.',
    tags: ['TCP/IP', 'DNS', 'Subnetting', 'SSH'],
  },
  {
    key: 'azure',
    name: 'Microsoft Azure',
    level: 65,
    description: 'Virtual machines, storage, networking and identity fundamentals.',
    tags: ['VMs', 'VNet', 'Blob Storage', 'Entra ID'],
  },
  {
    key: 'docker',
    name: 'Docker',
    level: 70,
    description: 'Building images, writing Dockerfiles and multi-container apps with Compose.',
    tags: ['Dockerfile', 'Compose', 'Images', 'Volumes'],
  },
  {
    key: 'kubernetes',
    name: 'Kubernetes',
    level: 55,
    description: 'Deployments, services, pods and scaling on local clusters.',
    tags: ['kubectl', 'Minikube', 'Pods', 'Services'],
  },
  {
    key: 'devops',
    name: 'DevOps',
    level: 60,
    description: 'CI/CD concepts, version control, automation and infrastructure mindset.',
    tags: ['Git', 'GitHub Actions', 'CI/CD', 'IaC'],
  },
]

export type ProjectIcon = 'server' | 'activity' | 'code' | 'container'

export const projects: {
  icon: ProjectIcon
  title: string
  category: string
  description: string
  highlights: string[]
  stack: string[]
  repo: string
}[] = [
  {
    icon: 'server',
    title: 'Linux System Administration',
    category: 'Infrastructure',
    description:
      'Configured and managed Linux servers in a home lab, covering user management, permissions, package management and service hardening.',
    highlights: [
      'User & group management with sudo policies',
      'SSH key-based auth and firewall rules (ufw)',
      'Scheduled backups and log rotation via cron',
    ],
    stack: ['Ubuntu', 'Bash', 'systemd', 'ufw'],
    repo: 'https://github.com/your-username/linux-sysadmin',
  },
  {
    icon: 'activity',
    title: 'Automated System Health Report',
    category: 'Automation',
    description:
      'A script that collects CPU, memory, disk and network metrics, flags anomalies and generates a daily health report delivered by email.',
    highlights: [
      'Threshold-based alerts for resource usage',
      'Readable HTML/text report generation',
      'Runs unattended on a cron schedule',
    ],
    stack: ['Python', 'Bash', 'psutil', 'cron'],
    repo: 'https://github.com/your-username/system-health-report',
  },
  {
    icon: 'code',
    title: 'Python Programming Projects',
    category: 'Development',
    description:
      'A collection of practical Python tools including a log file analyzer, a file organizer and a simple REST API consumer.',
    highlights: [
      'Log parser that summarizes errors by type',
      'Automated file sorting by type and date',
      'Clean, modular and documented code',
    ],
    stack: ['Python', 'Regex', 'JSON', 'REST'],
    repo: 'https://github.com/your-username/python-projects',
  },
  {
    icon: 'container',
    title: 'Docker & Kubernetes Projects',
    category: 'Containers',
    description:
      'Containerized a multi-tier web application with Docker Compose, then deployed and scaled it on a local Kubernetes cluster.',
    highlights: [
      'Optimized multi-stage Dockerfiles',
      'K8s Deployments, Services and ConfigMaps',
      'Horizontal scaling and rolling updates',
    ],
    stack: ['Docker', 'Compose', 'Kubernetes', 'Minikube'],
    repo: 'https://github.com/your-username/docker-k8s-projects',
  },
]

export const education = [
  {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Your University Name',
    period: '2021 — 2025',
    details:
      'Coursework in operating systems, computer networks, cloud computing, databases and programming.',
  },
  {
    degree: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    institution: 'Microsoft',
    period: '2025',
    details: 'Core cloud concepts, Azure services, security, governance and pricing.',
  },
  {
    degree: 'DevOps & Cloud Training Program',
    institution: 'Online Learning Platform',
    period: '2025 — Present',
    details: 'Hands-on labs in Linux, Docker, Kubernetes, CI/CD pipelines and infrastructure automation.',
  },
]
