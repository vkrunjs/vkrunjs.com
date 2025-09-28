import { Highlight, themes } from "prism-react-renderer";
import Logo from "../Logo";
import styles from "./styles.module.css";
import Link from "next/link";

const HomePage = () => {
  const codeBlock = `import v from "vkrun"

const vkrun = v.App()

vkrun.get("/", (req: v.Request, res: v.Response) => {
  res.status(200).send("Hello World!")
})

vkrun.server().listen(3000, () => {
  console.log("VkrunJS started on port 3000")
})`;

  return (
    <div className={styles.page}>
      <div className={styles.wrapperHome}>
        <Logo />

        <Highlight theme={themes.vsDark} code={codeBlock} language="ts">
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <pre
              style={{
                borderRadius: "16px",
                padding: "16px",
                ...style,
              }}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>

      <h2 className={styles.subTitle}>
        Node.js framework for building server-side applications.
      </h2>

      <div className={styles.wrapperButtons}>
        <Link href="/documentation/introduction">Documentation</Link>
        <Link href="https://github.com/vkrunjs/vkrun" target="_blanc">
          View on Github
        </Link>
      </div>

      <h2 className={styles.title}>Everything you need</h2>

      <p>
        Vkrun is a framework designed to deliver superior performance,
        scalability, and flexibility, providing a powerful experience without
        relying on external libraries.
      </p>
    </div>
  );
};

export default HomePage;
