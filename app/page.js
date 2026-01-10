export default function Home() {
    return (
        <>
            <meta charset="UTF-8" />
            <title>
                Automation Testing Training | Selenium, Playwright, Appium, API, JMeter
            </title>
            <meta name="description"
                content="Professional Automation Testing Training on Selenium, Playwright, Appium, API Automation using Rest Assured & Karate, and Performance Testing using JMeter with real-time projects." />
            <meta name="keywords"
                content="Automation Testing Training, Selenium Training, Playwright Training, Appium Training, API Automation Training, Rest Assured, Karate API Testing, JMeter Performance Testing" />

            <header className="header">
                <h1>Automation Testing Training</h1>
                <p>Learn Industry-Ready Automation Skills with Real-Time Projects</p>
            </header>

            <section className="section">
                <h2>About Me</h2>
                <p>
                    I am a Senior SDET with 14+ years of experience in Software Testing. I specialize in Automation, API,
                    Mobile, and Performance Testing, with a strong focus on real-world, industry-ready training.
                    I have 8+ years of hands-on experience in web automation using Selenium, 3+ years with Playwright, 5+ years
                    in API automation using Rest Assured and Postman, and 5+ years in mobile automation using Appium. I also
                    bring 3+ years of performance testing expertise using JMeter, helping teams identify and resolve scalability
                    and performance issues.
                    As a trainer, I focus on practical learning, framework design, best practices, and interview-oriented
                    preparation, ensuring learners gain skills that are directly applicable in real projects. My training
                    programs are designed for beginners to experienced professionals looking to upskill and stay relevant in
                    today’s automation-driven QA landscape.
                </p>
            </section>

            <section className="section">
                <h2>Training Offerings</h2>

                <div className="grid">
                    <Card
                        title="Selenium Automation"
                        desc="Selenium with Java / JavaScript, framework design, TestNG, Cucumber, 
                        Page Object Model, and CI/CD integration."
                    />
                    <Card
                        title="Playwright Automation"
                        desc="PPlaywright with JavaScript / TypeScript, modern locators,
                        parallel execution, and reporting"
                    />
                    <Card
                        title="Appium Mobile Automation"
                        desc="Android & iOS automation using Appium 3.x,
                        real device testing, and mobile automation frameworks."
                    />
                    <Card
                        title="API Automation"
                        desc="REST API automation using Rest Assured and Karate,
                        JSON validation, authentication, and API frameworks."
                    />
                    <Card
                        title="Performance Testing"
                        desc="JMeter performance and load testing,
                        test plan design, execution, and result analysis."
                    />
                </div>
            </section>

            <section className="section">
                <h2>Why Choose My Training?</h2>
                <ul>
                    <li>Real-time project-based learning</li>
                    <li>Industry-standard automation frameworks</li>
                    <li>Interview preparation & guidance</li>
                    <li>Hands-on practical sessions</li>
                    <li>Beginner to advanced level coverage</li>
                </ul>
            </section>

            <section className="section contact">
                <h2>Contact Me</h2>

                {/* Netlify Form */}
                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                >
                    <input type="hidden" name="form-name" value="contact" />

                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <input type="tel" name="phone" placeholder="Phone Number" />
                    <textarea name="message" placeholder="Your Message" required />

                    <button type="submit">Send Message</button>
                </form>

                <div className="whatsapp">
                    <p>Or contact directly on WhatsApp</p>
                    <a
                        href="https://wa.me/917044070309?text=Hi%20I%20am%20interested%20in%20Automation%20Testing%20Training"
                        target="_blank"
                    >
                        💬 Chat on WhatsApp
                    </a>
                </div>
            </section>

            <footer className="footer">
                © 2026 Automation Testing Training
            </footer>
        </>
    );
}

function Card({ title, desc }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    );
}
