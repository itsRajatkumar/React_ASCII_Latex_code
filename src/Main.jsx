import { MathJax, MathJaxContext } from "better-react-mathjax";

const config = {
    loader: { load: ["input/asciimath"] },
    asciimath: {
      displaystyle: true,
      delimiters: [
        ["$", "$"],
        ["`", "`"]
      ]
    }
  };


const Main = () => {
    return (
      <div>
        <MathJaxContext version={3} config={config}>
        <MathJax hideUntilTypeset={"first"}>
             {`this is block latex
                \\[\\sum_{n = 100}^{1000}\\left(\\frac{10\\sqrt{n}}{n}\\right)\\]` } 

                {`
                this is inline latex
              \\(x\\) or \\(\\frac{25x}{10} = 2^{10}\\)   `  } 
              <br/>
              {`
              this is inline ascii       
              \`sum_(n = 100)^(1000)(frac(10sqrt(n))(n))\``  }                    

             <p style={{ textAlign: "center" }}>
                this is block asciimath
             `sum_(n = 100)^(1000)(frac(10sqrt(n))(n))`
             </p>                                                      

        </MathJax>
        </MathJaxContext>
      </div>
    )
  }
  
  export default Main