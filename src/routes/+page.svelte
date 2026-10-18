<script lang="ts">
	const stats = [
		{ value: '4 years', label: 'Shipping full-stack, cloud-native software' },
		{ value: 'Fintech', label: 'Payments, banking and transaction systems' },
		{ value: 'SOC 2 · PCI', label: 'Led audits through to compliance' },
		{ value: 'AI in production', label: 'Shipped LLM features that automate manual review' }
	];

	const experience = [
		{
			when: 'Oct 2026 — Present',
			current: true,
			logo: { src: '/tompkins-logo.png', alt: 'Tompkins Bank & Trust', kind: 'tompkins' },
			role: 'Applied AI Engineer · Tompkins Bank & Trust',
			location: 'Batavia, NY',
			desc: 'Identify and deliver practical AI and automation across the bank — intelligent assistants, machine learning applications and workflow automation that cut manual effort and sharpen decision-making. Own the path from rapid prototype to production, with MLOps, monitoring and responsible-AI governance built in, and lead build-vs-buy evaluations and integration of third-party AI services.',
			tags: ['Intelligent assistants', 'Workflow automation', 'MLOps', 'AI governance', 'Vendor integration']
		},
		{
			when: 'Jun 2024 — Oct 2026',
			current: false,
			logo: { src: '/ValmarHoldings_Logo_OnLight.png', alt: 'Valmar Holdings', kind: 'valmar' },
			role: 'Software Engineer III · Valmar Holdings',
			location: 'Williamsville, NY',
			desc: 'Led development of AWS-native, serverless payment software from prototype to production, including the full-stack platform and integrations behind RTP, Push2Card and debit card transactions. Shipped LLM-powered features that automated manual review and data extraction, led the company through PCI and SOC 2 audits, and supported infrastructure as a stand-in to the CISO.',
			tags: ['Go', 'React', 'C#', 'AWS', 'LLM APIs', 'SOC 2 · PCI']
		},
		{
			when: 'May 2022 — Mar 2024',
			current: false,
			logo: null,
			role: 'Full Stack Engineer · LCI-AE.COM LLC',
			location: 'Williamsville, NY',
			desc: 'Spearheaded a new full-stack application for member management of local union clientele. Worked closely with customers to turn business requirements into delivered features, and introduced Agile and SCRUM to development and operations.',
			tags: ['React', 'Django', 'Docker', 'MSSQL Server']
		}
	];

	const projects = [
		{
			meta: 'Valmar Holdings · 2024 — 2026',
			title: 'RCC eCheck Processing',
			desc: 'Replaced an hours-long manual eCheck process by programmatically creating X937 files, letting the company process thousands of checks daily. Built a custom C# driver and DigitalCheck scanner integration for a fully automated pipeline.',
			stack: 'C# · Go · Java · AWS Lambda · DynamoDB · S3 · React'
		},
		{
			meta: 'Valmar Holdings',
			title: 'LLM-Powered Review Automation',
			desc: 'Designed and shipped LLM features in production payment software, integrating third-party model APIs to automate manual review and data-extraction workflows.',
			stack: 'LLM APIs · Go · AWS'
		},
		{
			meta: 'Valmar Holdings',
			title: 'TSYS Sierra Debit Integration',
			desc: 'A robust, packet-driven integration with TSYS Sierra to move funds via debit card, alongside OPN and Shazam APIs supporting Real-Time Payment and Push2Card channels.',
			stack: 'Go · AWS'
		},
		{
			meta: 'LCI-AE.COM LLC · 2022 — 2024',
			title: 'Union Member Management Platform',
			desc: 'Spearheaded a new full-stack application for managing local union members, translating customer requirements directly into delivered features.',
			stack: 'React · Django · Docker · MSSQL Server'
		},
		{
			meta: 'University at Buffalo · 2022',
			title: 'MLMap: Wi-Fi Based Localization',
			desc: 'Managed a team of five building an Android app that uses Wi-Fi based localization and mapping to route people to rooms throughout campus buildings.',
			stack: 'Kotlin · MQTT · Docker · MapBox · Android Studio'
		}
	];

	const skills = [
		{ group: 'Languages', items: 'Go, C#, TypeScript / JavaScript, Java, SQL, Rust, C, PHP, HTML, CSS' },
		{ group: 'AI & developer tooling', items: 'LLM API integration, RAG, MCP, Claude Code, GitHub Copilot, Codex, ChatGPT' },
		{
			group: 'Cloud & infrastructure',
			items: 'AWS (Lambda, S3, DynamoDB, RDS, Aurora, EC2, ECS, SAM, CloudWatch, CloudFormation), Azure, Entra, Intune, Docker, NGINX, Linux'
		},
		{ group: 'Frameworks & data', items: 'React, SvelteKit, TailwindCSS, Django, Vite, PostgreSQL, MSSQL Server, DynamoDB' },
		{ group: 'Practices', items: 'Agile, SCRUM, Kanban, Jira, Git / GitHub, SOC 2, PCI DSS, encryption' }
	];
</script>

<svelte:head>
	<title>Ashton Hannon — Software Engineer</title>
</svelte:head>

<div class="page">
	<header class="site-header">
		<span class="brand">Ashton Hannon</span>
		<nav aria-label="Main">
			<a href="#experience">Experience</a>
			<a href="#education">Education</a>
			<a href="#projects">Projects</a>
			<a href="#skills">Skills</a>
			<a class="nav-contact" href="mailto:ahannon228@gmail.com">Contact →</a>
		</nav>
	</header>

	<section class="hero">
		<div class="hero-copy">
			<p class="eyebrow">Software Engineer · Applied AI · Fintech</p>
			<h1>Production software that solves real business problems.</h1>
			<p class="lede">
				I'm Ashton, a Buffalo-based engineer with four years of experience building and shipping
				full-stack, cloud-native applications — much of it in financial technology. I take ideas from
				prototype to production, and today I bring AI and automation to banking as an Applied AI
				Engineer at Tompkins Bank &amp; Trust.
			</p>
			<div class="actions">
				<a class="btn btn-primary" href="mailto:ahannon228@gmail.com">Get in touch</a>
				<a class="btn btn-secondary" href="/Ashton Hannon.pdf" target="_blank" rel="noopener">
					Resume (PDF)
				</a>
			</div>
		</div>
		<div class="hero-photo">
			<img src="/headshot.jpg" alt="Headshot of Ashton Hannon" />
			<div class="photo-meta">
				<span>Buffalo, NY</span>
				<span>
					<a href="https://github.com/AshtonHannon" target="_blank" rel="noopener">GitHub</a> ·
					<a href="https://www.linkedin.com/in/ashton-hannon" target="_blank" rel="noopener">LinkedIn</a>
				</span>
			</div>
		</div>
	</section>

	<section class="stats">
		{#each stats as stat}
			<div class="stat">
				<p class="stat-value">{stat.value}</p>
				<p class="stat-label">{stat.label}</p>
			</div>
		{/each}
	</section>

	<section id="experience" class="block block-first">
		<h2>Experience</h2>
		<div class="timeline">
			{#each experience as job}
				<article class:current={job.current}>
					<span class="dot"></span>
					<p class="when">{job.when}</p>
					{#if job.logo}
						<img class="logo logo-{job.logo.kind}" src={job.logo.src} alt={job.logo.alt} />
					{/if}
					<h3>{job.role}</h3>
					<p class="location">{job.location}</p>
					<p class="desc">{job.desc}</p>
					<div class="tags">
						{#each job.tags as tag}
							<span>{tag}</span>
						{/each}
					</div>
				</article>
			{/each}
		</div>
	</section>

	<section id="education" class="block">
		<h2>Education</h2>
		<div class="card edu">
			<div class="row">
				<h3>University at Buffalo, SUNY</h3>
				<span class="row-date">Aug 2020 — May 2024</span>
			</div>
			<p class="degree">Bachelor of Science, Computer Science</p>
			<p class="location">GPA 3.5 · Magna Cum Laude · Buffalo, NY</p>
			<div class="capstone">
				<div class="row">
					<p class="capstone-title">Capstone: Wi-Fi Based Localization</p>
					<span class="row-date capstone-date">Jan 2022 — Jun 2022</span>
				</div>
				<p class="capstone-desc">
					Managed a team of five building MLMap, an Android app that uses Wi-Fi based localization and
					mapping to route people to rooms throughout campus buildings.
				</p>
				<div class="tags">
					<span>Kotlin</span><span>MQTT</span><span>Docker</span><span>MapBox</span><span>Android Studio</span>
				</div>
			</div>
		</div>
	</section>

	<section id="projects" class="block">
		<h2>Selected projects</h2>
		<div class="projects">
			{#each projects as project}
				<div class="card project">
					<p class="project-meta">{project.meta}</p>
					<h3>{project.title}</h3>
					<p class="project-desc">{project.desc}</p>
					<p class="project-stack">{project.stack}</p>
				</div>
			{/each}
			<a
				class="card project project-link"
				href="https://github.com/AshtonHannon/latte"
				target="_blank"
				rel="noopener"
			>
				<span class="project-meta">Side project · 2023 — now</span>
				<span class="project-title">Latte ↗</span>
				<span class="project-desc">
					A Java web framework inspired by Spring Boot, with annotation-driven routing, dependency
					injection and an embedded server.
				</span>
				<span class="project-stack">Java</span>
			</a>
		</div>
	</section>

	<section id="skills" class="block block-last">
		<h2>Skills</h2>
		<div class="skills">
			{#each skills as skill}
				<div>
					<p class="skill-group">{skill.group}</p>
					{skill.items}
				</div>
			{/each}
		</div>
	</section>

	<footer>
		<span>© 2026 Ashton Hannon · Buffalo, NY</span>
		<a href="mailto:ahannon228@gmail.com">ahannon228@gmail.com</a>
	</footer>
</div>

<style>
	.page {
		box-sizing: content-box;
		max-width: 1120px;
		margin: 0 auto;
		padding: 0 24px;
		min-height: 100vh;
	}

	a {
		color: var(--ink);
		text-decoration: none;
		transition: color 0.15s, border-color 0.15s, background-color 0.15s;
	}
	a:hover {
		color: var(--accent);
	}

	p,
	h1,
	h2,
	h3 {
		margin: 0;
	}

	/* Header */
	.site-header {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: 16px;
		padding: 28px 0;
		border-bottom: 1px solid var(--line);
	}
	.brand {
		font-weight: 800;
		font-size: 17px;
		letter-spacing: -0.01em;
	}
	nav {
		display: flex;
		flex-wrap: wrap;
		gap: 28px;
		font-size: 15px;
		font-weight: 500;
	}
	nav a {
		color: var(--ink-2);
	}
	nav a:hover {
		color: var(--accent);
	}
	nav .nav-contact {
		color: var(--accent);
		font-weight: 700;
	}

	/* Hero */
	.hero {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 56px;
		padding: 96px 0 80px;
	}
	.hero-copy {
		flex: 999 1 520px;
		min-width: 0;
	}
	.eyebrow {
		font-size: 15px;
		font-weight: 600;
		color: var(--accent);
	}
	h1 {
		margin-top: 18px;
		font-size: clamp(40px, 5.2vw, 64px);
		line-height: 1.05;
		letter-spacing: -0.04em;
		font-weight: 800;
	}
	.lede {
		margin-top: 24px;
		max-width: 580px;
		font-size: 18px;
		line-height: 1.7;
		color: var(--ink-2);
	}
	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 36px;
	}
	.btn {
		display: inline-flex;
		align-items: center;
		min-height: 48px;
		padding: 0 24px;
		border-radius: 8px;
		font-weight: 600;
		font-size: 15px;
	}
	.btn-primary {
		background: var(--ink);
		color: #fff;
	}
	.btn-primary:hover {
		background: var(--accent);
		color: #fff;
	}
	.btn-secondary {
		border: 1px solid var(--line-strong);
	}
	.btn-secondary:hover {
		border-color: var(--accent);
	}
	.hero-photo {
		flex: 1 1 300px;
		min-width: 0;
		max-width: 400px;
	}
	.hero-photo img {
		display: block;
		width: 100%;
		aspect-ratio: 4 / 5;
		object-fit: cover;
		object-position: 50% 30%;
		border-radius: 20px;
		border: 1px solid #e2e2de;
	}
	.photo-meta {
		display: flex;
		justify-content: space-between;
		gap: 12px;
		margin-top: 16px;
		font-size: 14px;
		color: var(--ink-2);
	}
	.photo-meta a {
		color: var(--ink-2);
	}
	.photo-meta a:hover {
		color: var(--accent);
	}

	/* Stats */
	.stats {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		border-top: 1px solid var(--line);
		border-bottom: 1px solid var(--line);
	}
	.stat {
		padding: 28px 24px 28px 0;
	}
	.stat:last-child {
		padding-right: 0;
	}
	.stat-value {
		font-size: 22px;
		font-weight: 800;
		letter-spacing: -0.02em;
	}
	.stat-label {
		margin-top: 6px;
		font-size: 14px;
		color: var(--ink-2);
	}

	/* Section blocks: heading column + content column */
	.block {
		display: flex;
		flex-wrap: wrap;
		gap: 48px;
		padding: 48px 0;
		scroll-margin-top: 24px;
	}
	.block-first {
		padding-top: 96px;
	}
	.block-last {
		padding-bottom: 96px;
	}
	h2 {
		flex: 1 1 240px;
		font-size: 30px;
		letter-spacing: -0.03em;
		font-weight: 800;
	}
	h3 {
		font-size: 22px;
		font-weight: 700;
	}

	/* Experience timeline */
	.timeline {
		flex: 999 1 560px;
		min-width: 0;
		border-left: 2px solid var(--line);
		padding-left: 32px;
		display: flex;
		flex-direction: column;
		gap: 48px;
	}
	article {
		position: relative;
	}
	.dot {
		position: absolute;
		left: -43px;
		top: 6px;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: var(--dot);
		border: 3px solid var(--bg);
	}
	article.current .dot {
		background: var(--accent);
	}
	.when {
		font-size: 14px;
		font-weight: 600;
		color: var(--ink-3);
	}
	article.current .when {
		color: var(--accent);
	}
	.logo {
		display: block;
		width: auto;
		max-width: 100%;
	}
	.logo-tompkins {
		height: 48px;
		margin: 10px 0 0 -14px;
	}
	.logo-valmar {
		height: 30px;
		margin-top: 16px;
	}
	article h3 {
		margin-top: 8px;
	}
	.location {
		margin-top: 4px;
		font-size: 15px;
		color: var(--ink-3);
	}
	.desc {
		margin-top: 12px;
		font-size: 16px;
		line-height: 1.7;
		color: var(--ink-2);
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-top: 16px;
		font-size: 13px;
		font-weight: 500;
		color: var(--ink-soft);
	}
	.tags span {
		padding: 5px 10px;
		border-radius: 6px;
		background: var(--chip);
	}

	/* Cards */
	.card {
		border: 1px solid var(--line);
		border-radius: 16px;
		background: var(--surface);
	}

	/* Education */
	.edu {
		flex: 999 1 560px;
		min-width: 0;
		padding: 32px;
	}
	.row {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: baseline;
		gap: 8px 24px;
	}
	.row-date {
		font-size: 14px;
		font-weight: 600;
		color: var(--ink-3);
	}
	.degree {
		margin-top: 6px;
		font-size: 16px;
		color: var(--ink-soft);
	}
	.capstone {
		margin-top: 24px;
		padding-top: 20px;
		border-top: 1px solid var(--chip);
	}
	.capstone-title {
		font-size: 16px;
		font-weight: 700;
	}
	.capstone-date {
		font-weight: 400;
	}
	.capstone-desc {
		margin-top: 8px;
		font-size: 15px;
		line-height: 1.7;
		color: var(--ink-2);
	}
	.capstone .tags {
		margin-top: 14px;
	}

	/* Projects */
	.projects {
		flex: 999 1 560px;
		min-width: 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 16px;
	}
	.project {
		padding: 28px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.project-meta {
		font-size: 13px;
		font-weight: 600;
		color: var(--accent);
	}
	.project h3,
	.project-title {
		font-size: 18px;
		font-weight: 700;
	}
	.project-desc {
		font-size: 15px;
		line-height: 1.6;
		color: var(--ink-2);
	}
	.project-stack {
		margin-top: auto;
		padding-top: 8px;
		font-size: 13px;
		color: var(--ink-3);
	}
	.project-link:hover {
		border-color: var(--accent);
		color: var(--ink);
	}
	.project-link:hover .project-title {
		color: var(--accent);
	}

	/* Skills */
	.skills {
		flex: 999 1 560px;
		min-width: 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 32px;
		font-size: 15px;
		line-height: 1.8;
		color: var(--ink-2);
	}
	.skill-group {
		margin-bottom: 8px;
		font-weight: 700;
		color: var(--ink);
	}

	/* Footer */
	footer {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 12px;
		padding: 28px 0 40px;
		border-top: 1px solid var(--line);
		font-size: 14px;
		color: var(--ink-3);
	}
	footer a {
		color: var(--accent);
		font-weight: 600;
	}

	@media (max-width: 560px) {
		.hero {
			gap: 40px;
			padding: 56px 0;
		}
		.block-first {
			padding-top: 64px;
		}
		.block-last {
			padding-bottom: 64px;
		}
		.block {
			gap: 28px;
		}
		.edu {
			padding: 24px;
		}
	}
</style>
