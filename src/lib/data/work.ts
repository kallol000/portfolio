export type WorkItem = {
    slug: string
    title: string
    category: string
    description: string
    details: string
    highlights: string[]
}

export const workItems: WorkItem[] = [
    {
        slug: "portfolio-dashboard",
        title: "Portfolio Dashboard",
        category: "Application",
        description: "A React-based dashboard for tracking project status, metrics, and team progress in one place.",
        details:
            "Built a clean portfolio management app with custom reporting, role-based access, and reusable UI components to help teams review projects quickly.",
        highlights: ["React", "TypeScript", "Dashboard", "Data Viz"],
    },
    {
        slug: "analytics-insights",
        title: "Analytics Insights",
        category: "Work Project",
        description: "A customer analytics tool created at my job to monitor behavior, trends, and engagement in real time.",
        details:
            "Designed and shipped a data visualization experience that surfaces core user metrics, conversion funnels, and product usage patterns for the business team.",
        highlights: ["Business Metrics", "UX", "SQL", "Performance"],
    },
    {
        slug: "inventory-automation",
        title: "Inventory Automation",
        category: "Application",
        description: "An internal automation tool for syncing inventory status between systems and reducing manual update work.",
        details:
            "Developed an automated workflow that integrates inventory feeds, triggers alerts for low stock, and simplifies operations through an intuitive interface.",
        highlights: ["Automation", "APIs", "Internal Tool", "Workflow"],
    },
    {
        slug: "landing-redesign",
        title: "Landing Page Redesign",
        category: "Work Project",
        description: "A UX and visual refresh of a core product landing page aimed at improving conversion and clarity.",
        details:
            "Collaborated with design and marketing to rebuild the landing experience, refine messaging, and increase visitor engagement across desktop and mobile.",
        highlights: ["Design System", "Copy", "Conversion", "Responsive"],
    },
    {
        slug: "team-onboarding",
        title: "Team Onboarding Toolkit",
        category: "Work Project",
        description: "A collection of onboarding resources and workflows to help new hires ramp faster at my company.",
        details:
            "Assembled a practical onboarding toolkit that includes technical guides, process documentation, and a searchable resource center for new team members.",
        highlights: ["Documentation", "Process", "Collaboration", "Enablement"],
    },
]
