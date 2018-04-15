# CSS validation tool POC 
Version: 0.1 

**This tool use W3C validation service to examine css output.**
- This tool is based on the[w3c-css](https://github.com/gchudnov/w3c-css) project.
- We use 'gulp'
- Output is a 'json' report.
- Report parameters are controlled by the W3c API
- Paths for 'target' file are configurable

### configurable variables:  
**Configurable via '.gulpconfig.json'** 

**Output:**
- "report": 'Json' output name.  

**Pathes:**   
 - "project": project path
 - "theme": theme path
 - "css": css file name.
 - "dist": destination of output.

### How to use: 
0. Install NPM dependencies. ````npm i````
0. configure paths for: project, theme and CSS.
0. configure parametes for 'validate' (optional)
0. invoke default task: ````gulp````
0. fix issues.

### Task and Pipes: 
- 'cssbeautify': we format the CSS 
  - Target is a minimized file in order to get the correct line numbers and for readability.
  - Output is an expanded CSS
- 'validate': this invokes the validation service using arguments available.
  - we use only 'errors' by default.
  - CSS 3 in a service default.
- 'jsonFormat': formating 'json' report for readability.
- 'rename': using defined name for report.
- destination of 'dist' output file.
