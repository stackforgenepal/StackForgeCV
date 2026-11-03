export const RESOURCE_ARTICLES = [
  {
    slug: 'student-cv-example',
    title: 'Student CV Example: How to Make a CV With Limited Experience',
    shortTitle: 'Student CV Example',
    category: 'CV example',
    group: 'examples',
    description: 'Learn how to structure a student CV, present education and projects, and show relevant skills even when you have little work experience.',
    intro: 'You do not need years of employment history to create a strong student CV. A clear education section, relevant coursework, projects, volunteering and practical skills can show what you are able to do. The key is to put the most relevant evidence near the top and explain your contribution clearly.',
    readTime: '6 min read',
    sections: [
      {
        heading: 'A practical structure for a student CV',
        paragraphs: ['Keep the document easy to scan and usually to one page when you are early in your career. Use clear section headings and reverse chronological order within sections.'],
        bullets: [
          'Contact information: your name, professional email, phone number and city. Add a portfolio or LinkedIn link when it is relevant.',
          'Profile: two or three sentences describing what you study, your strongest relevant skills and the kind of opportunity you are seeking.',
          'Education: degree or qualification, institution, dates and relevant coursework or achievements.',
          'Projects and experience: class projects, personal projects, internships, volunteering, clubs or part-time work.',
          'Skills: specific tools, technical abilities and languages that you can explain or demonstrate.'
        ]
      },
      {
        heading: 'Example student CV profile',
        paragraphs: ['Adapt this example to your real background. Replace every bracketed detail and remove any skill or experience you cannot honestly support.'],
        example: {
          label: 'PROFILE',
          text: 'Motivated [degree] student at [institution] with an interest in [career area]. Built practical experience through [project, coursework or volunteering], using [relevant tools or skills]. Seeking an opportunity to contribute, learn and develop in [type of role].'
        }
      },
      {
        heading: 'How to present academic and personal projects',
        paragraphs: ['Projects are useful evidence when you have not held a formal job. Give each project a clear title, date and short description. Focus on what you personally did rather than only describing the project idea.'],
        bullets: [
          'State the problem or goal in one sentence.',
          'Name the tools, methods or technologies you used.',
          'Describe your contribution with an action verb such as designed, tested, programmed, analyzed or coordinated.',
          'Include a measurable result only when you can verify it.'
        ]
      },
      {
        heading: 'Common student CV mistakes to avoid',
        paragraphs: ['Avoid filling the page with generic claims such as hardworking, passionate or team player without evidence. Do not include school subjects, hobbies or personal details simply to make the CV longer. Check spelling, dates, contact details and consistent formatting before sending it.']
      }
    ],
    related: ['cv-with-no-experience', 'how-to-write-a-cv', 'write-cv-summary']
  },
  {
    slug: 'software-engineer-cv-example',
    title: 'Software Engineer CV Example: Skills, Projects and Experience',
    shortTitle: 'Software Engineer CV Example',
    category: 'CV example',
    group: 'examples',
    description: 'See how to organize a software engineer CV with technical skills, projects, work experience and links to your code or portfolio.',
    intro: 'A software engineer CV should make your technical strengths easy to verify. Hiring teams need to understand what you built, which technologies you used, how you approached problems and what changed because of your work. Put relevant projects and experience ahead of a long list of tools.',
    readTime: '7 min read',
    sections: [
      {
        heading: 'Recommended software engineer CV sections',
        paragraphs: ['Choose sections based on your experience level. A student or career changer can put projects and education near the top; an experienced developer will usually lead with a concise profile and relevant employment history.'],
        bullets: [
          'Contact and links: professional email, phone, location, GitHub, portfolio and LinkedIn where relevant.',
          'Professional summary: your role or level, strongest technical areas and the kind of engineering work you do.',
          'Technical skills: group languages, frameworks, databases, cloud platforms and tools instead of writing one long sentence.',
          'Experience: describe the product or system, your contribution and the outcome.',
          'Projects: include selected work that demonstrates skills relevant to the role.',
          'Education and certifications: include relevant qualifications and dates.'
        ]
      },
      {
        heading: 'Example project entry',
        paragraphs: ['Use a structure like this and replace it with work you actually completed.'],
        example: {
          label: 'PROJECT — [PROJECT NAME] | [MONTH YEAR]',
          text: 'Built a [type of application or system] using [language, framework and database]. Implemented [specific feature or technical contribution], tested [important behavior] and documented the setup in a public repository.\nTechnologies: [technology 1], [technology 2], [technology 3].'
        }
      },
      {
        heading: 'Write technical bullet points that show evidence',
        paragraphs: ['Start with a specific action and explain the engineering work. Avoid bullets that only say you were responsible for a technology.'],
        bullets: [
          'Weak: Worked with Python and databases.',
          'Stronger: Developed a Python API that validates submitted records and stores them in a PostgreSQL database.',
          'Weak: Helped improve the website.',
          'Stronger: Reworked the product listing interface to reduce repeated requests and make filtering easier to use.'
        ]
      },
      {
        heading: 'Tailor the CV to the job description',
        paragraphs: ['Prioritize the languages, frameworks and engineering practices the role asks for, but only include skills you can discuss confidently. Use the same standard terminology as the job description when it accurately describes your experience. Do not add keywords that you cannot support in an interview.']
      }
    ],
    related: ['student-cv-example', 'how-to-write-a-cv', 'describe-projects-on-cv']
  },
  {
    slug: 'academic-cv-example',
    title: 'Academic CV Example: Education, Research and Publications',
    shortTitle: 'Academic CV Example',
    category: 'CV example',
    group: 'examples',
    description: 'Understand the sections commonly used in an academic CV, including education, research experience, publications and presentations.',
    intro: 'An academic CV gives a detailed account of your education, research and scholarly work. Unlike a short industry résumé, its length depends on your career stage and the requirements of the application. Include only sections that are relevant and accurate for your experience.',
    readTime: '6 min read',
    sections: [
      {
        heading: 'Common sections in an academic CV',
        paragraphs: ['There is no single format for every discipline or institution. Follow the application instructions first, then organize the most relevant information so reviewers can find it quickly.'],
        bullets: [
          'Contact information and professional profile.',
          'Education, including degrees, institutions, dates and thesis titles when relevant.',
          'Research interests and research experience.',
          'Publications, presentations, posters or conference contributions, if applicable.',
          'Teaching, laboratory, fieldwork or academic service experience.',
          'Awards, grants, scholarships, professional memberships and relevant technical skills.'
        ]
      },
      {
        heading: 'Example research experience entry',
        paragraphs: ['Use this as a formatting pattern, not as a claim about your own experience.'],
        example: {
          label: 'RESEARCH PROJECT — [PROJECT TITLE] | [INSTITUTION] | [DATES]',
          text: 'Investigated [research question] using [method, equipment or dataset]. Contributed to [specific task], analyzed [type of results] and presented findings to [class, laboratory group or conference], where applicable.'
        }
      },
      {
        heading: 'List publications and presentations accurately',
        paragraphs: ['Use the citation style expected in your field or by the institution. Clearly distinguish published work, accepted work, submitted manuscripts, conference abstracts and informal presentations. Never list a draft as a published paper.']
      },
      {
        heading: 'Adapt the academic CV to the opportunity',
        paragraphs: ['A research assistant application may emphasize laboratory methods and project experience. A teaching-focused role may require more detail about courses, tutoring and teaching materials. A graduate application may ask for a résumé rather than a full academic CV, so check the requested document type and page limit.']
      }
    ],
    related: ['student-cv-example', 'how-to-write-a-cv', 'cv-vs-resume']
  },
  {
    slug: 'how-to-write-a-cv',
    title: 'How to Write a CV: A Step-by-Step Guide',
    shortTitle: 'How to Write a CV',
    category: 'CV writing guide',
    group: 'guides',
    description: 'A practical guide to planning, writing, organizing and checking a professional CV before you apply for a job or internship.',
    intro: 'A good CV is a focused summary of evidence that you are a suitable candidate for a particular opportunity. It should be clear, relevant and easy to scan. Start with the information the employer needs, then select examples that demonstrate your skills and experience.',
    readTime: '8 min read',
    sections: [
      {
        heading: '1. Read the opportunity before writing',
        paragraphs: ['Identify the main responsibilities, required skills, qualifications and terminology in the job or internship description. Note which parts of your background provide evidence for those requirements. This helps you decide what deserves space on the CV.']
      },
      {
        heading: '2. Choose the right CV sections',
        paragraphs: ['Most CVs include contact information, a short profile, education, experience and skills. Add projects, certifications, volunteering, publications or awards when they strengthen your application. Put the most relevant sections near the top.']
      },
      {
        heading: '3. Write specific and evidence-based descriptions',
        paragraphs: ['Use action verbs and explain your contribution. A useful bullet often follows this pattern: action + task or method + result or purpose. Include numbers only when they are accurate and meaningful.'],
        bullets: [
          'Instead of “Responsible for social media”, explain which channels you managed and what work you completed.',
          'Instead of “Good at programming”, identify the languages and describe a project where you used them.',
          'Instead of “Worked in a team”, explain the part of the shared task you owned.'
        ]
      },
      {
        heading: '4. Keep the layout readable',
        paragraphs: ['Use consistent heading styles, spacing, dates and bullet formatting. Choose a readable font and sufficient contrast. Avoid dense paragraphs, decorative elements that compete with the content and unnecessary personal information. A one-page CV is often suitable for students and early-career applicants, but relevance matters more than forcing every CV onto one page.']
      },
      {
        heading: '5. Proofread and export carefully',
        paragraphs: ['Check names, email addresses, dates, spelling and links. Open the exported PDF to confirm that the layout has not shifted, text is not cut off and page breaks look sensible. Follow the employer’s requested file type and naming instructions.']
      }
    ],
    related: ['student-cv-example', 'cv-with-no-experience', 'write-cv-summary']
  },
  {
    slug: 'cv-with-no-experience',
    title: 'How to Write a CV With No Work Experience',
    shortTitle: 'CV With No Experience',
    category: 'CV writing guide',
    group: 'guides',
    description: 'Learn how to build a first CV using education, projects, volunteering, extracurricular activities and transferable skills.',
    intro: 'A first CV does not need to pretend that you have professional experience. Employers can still learn about your abilities through coursework, personal projects, volunteering, student clubs, competitions and responsibilities outside paid work. Present these experiences honestly and explain what you did.',
    readTime: '7 min read',
    sections: [
      {
        heading: 'Use relevant experience beyond paid jobs',
        paragraphs: ['Experience can come from many places. Select activities where you took responsibility, solved a problem, helped a group, created something or developed a useful skill. Include only activities that support the role you are applying for.'],
        bullets: [
          'Academic or personal projects.',
          'Laboratory work, coursework and research assignments.',
          'Volunteering, community work and event organization.',
          'Student clubs, competitions and team activities.',
          'Freelance work, family business support or part-time responsibilities.'
        ]
      },
      {
        heading: 'Put education and projects where employers can see them',
        paragraphs: ['For a student or recent graduate, education and projects can appear before employment history. Include the institution, qualification, dates and relevant subjects or achievements. For each project, explain the goal, your role, the tools used and what you completed.']
      },
      {
        heading: 'Write a short, honest profile',
        example: {
          label: 'FIRST-CV PROFILE EXAMPLE',
          text: 'Entry-level [field] candidate and [qualification] student with practical experience from [project or activity]. Familiar with [relevant skills] and interested in applying them in a [role or industry] environment.'
        },
        paragraphs: ['Avoid calling yourself an expert or claiming professional experience you do not have. A precise profile is more credible than a long list of broad adjectives.']
      },
      {
        heading: 'Show transferable skills with examples',
        paragraphs: ['Communication, organization, teamwork and problem-solving are useful when they are supported by evidence. For example, explain how you coordinated a student event, documented a project, presented research or handled a customer request.']
      }
    ],
    related: ['student-cv-example', 'how-to-write-a-cv', 'write-cv-summary']
  },
  {
    slug: 'write-cv-summary',
    title: 'How to Write a CV Summary: Examples and a Simple Formula',
    shortTitle: 'Write a CV Summary',
    category: 'CV writing guide',
    group: 'guides',
    description: 'Write a concise CV profile that explains your background, strongest relevant skills and the value you can bring to a role.',
    intro: 'A CV summary, sometimes called a profile or professional summary, sits near the top of your CV. Its job is to help a reader quickly understand your background and relevance. It should be specific to the opportunity rather than a generic statement that could describe anyone.',
    readTime: '5 min read',
    sections: [
      {
        heading: 'Use a simple three-part formula',
        bullets: [
          'Your current role, qualification or professional level.',
          'One or two relevant strengths supported by your experience.',
          'The type of work or opportunity you are targeting.'
        ],
        paragraphs: ['For most applicants, two to four concise lines are enough. You do not need to repeat every skill or achievement that appears elsewhere in the CV.']
      },
      {
        heading: 'Example for a student or fresher',
        example: {
          label: 'STUDENT PROFILE',
          text: '[Degree] student with practical experience in [relevant project, coursework or activity]. Developed skills in [two or three relevant areas] and interested in an entry-level opportunity in [target field].'
        }
      },
      {
        heading: 'Example for an experienced professional',
        example: {
          label: 'PROFESSIONAL PROFILE',
          text: '[Job title] with experience in [specialist area or industry]. Skilled in [relevant methods or tools], with a background in [type of responsibility or achievement]. Seeking to contribute to [type of role or team].'
        }
      },
      {
        heading: 'What to avoid in a CV summary',
        bullets: [
          'Long personal statements that use half the first page.',
          'Unsupported claims such as “the best candidate” or “expert in everything”.',
          'Generic adjectives without an example or skill to support them.',
          'First-person wording repeated throughout the paragraph.',
          'A summary that does not match the job or internship being targeted.'
        ]
      }
    ],
    related: ['cv-with-no-experience', 'student-cv-example', 'how-to-write-a-cv']
  },
  {
    slug: 'describe-projects-on-cv',
    title: 'How to Describe Projects on a CV',
    shortTitle: 'Describe Projects on a CV',
    category: 'CV writing guide',
    group: 'guides',
    description: 'Turn academic, personal and technical projects into clear CV entries that show your role, tools, decisions and results.',
    intro: 'Projects can be some of the strongest evidence on a student, graduate or technical CV. A useful project entry explains what you set out to do, what part you handled and what you completed. A list of project names or technologies alone does not show the reader how you used your skills.',
    readTime: '6 min read',
    sections: [
      {
        heading: 'Use a consistent project format',
        paragraphs: ['For each selected project, include a clear name, date or timeframe, a short description and two or three focused bullet points. Add a repository, demo or portfolio link when it is available, relevant and safe to share.']
      },
      {
        heading: 'Explain your contribution',
        bullets: [
          'Goal: what problem did the project address?',
          'Your role: what did you personally design, build, test, write or organize?',
          'Tools: which technologies, methods or equipment did you use?',
          'Outcome: what was completed, tested, demonstrated or improved?'
        ]
      },
      {
        heading: 'Example project description',
        example: {
          label: 'PROJECT — [PROJECT NAME]',
          text: 'Designed and built a [project type] to [purpose]. Implemented [your specific feature or task] using [tools or technologies], then tested [important behavior] and documented the results.\nTools: [tool 1], [tool 2], [tool 3].'
        },
        paragraphs: ['Keep the example truthful. If a project was completed as part of a team, distinguish your own contribution from the work completed by other team members.']
      },
      {
        heading: 'Select projects for the role',
        paragraphs: ['You do not need to include every project you have ever started. Choose work that demonstrates the skills requested in the job description. A software role may call for a deployed application or code repository, while an electronics role may benefit from a circuit design, prototype, test process or technical report.']
      }
    ],
    related: ['software-engineer-cv-example', 'student-cv-example', 'how-to-write-a-cv']
  },
  {
    slug: 'cv-vs-resume',
    title: 'CV vs Resume: What Is the Difference?',
    shortTitle: 'CV vs Resume',
    category: 'CV writing guide',
    group: 'guides',
    description: 'Understand how CV and résumé usage differs by country, industry and application, and how to choose the document an employer requests.',
    intro: 'The words CV and résumé are sometimes used interchangeably, but their meaning depends on the country and context. In some places, CV usually means a concise job-application document. In other contexts, especially academic applications, a CV can be a longer record of research, teaching and publications.',
    readTime: '5 min read',
    sections: [
      {
        heading: 'The terms vary by country',
        paragraphs: ['In the United States, a résumé is commonly used for most non-academic jobs, while an academic CV is typically more detailed. In the United Kingdom and many other countries, CV is the usual term for a job-application document. Employers in the same country may still use the terms differently.']
      },
      {
        heading: 'A job-application CV or résumé',
        paragraphs: ['This document is tailored to a particular role. It usually highlights relevant experience, education, skills and selected achievements. Its length and format should follow local expectations and the employer’s instructions.']
      },
      {
        heading: 'An academic CV',
        paragraphs: ['An academic CV may include detailed education, research interests, publications, presentations, teaching, grants, awards and academic service. It grows as relevant scholarly experience accumulates.']
      },
      {
        heading: 'Which one should you prepare?',
        paragraphs: ['Follow the language used in the job advertisement or application instructions. If an employer asks for a résumé, provide the concise document they expect. If a university or research position requests an academic CV, include the relevant scholarly record. When instructions are unclear, check the organization’s guidance rather than guessing.']
      }
    ],
    related: ['academic-cv-example', 'how-to-write-a-cv', 'student-cv-example']
  }
]

export const getResourceBySlug = (slug) =>
  RESOURCE_ARTICLES.find((article) => article.slug === slug)

export const getResourcesByGroup = (group) =>
  RESOURCE_ARTICLES.filter((article) => article.group === group)
