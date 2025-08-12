//* Okay, let's break down Compiled Languages, Interpreted Languages, and Just-In-Time (JIT) Compilation, specifically in the context of JavaScript, all in English.

//* What is a Compiled Language?
//* In a compiled language, the source code you write (like C, C++, Go) is directly transformed into machine code (the binary code that a computer's processor understands and executes) by a program called a compiler.

//* Key Points:

// *One-time translation: The compiler translates the entire code into machine code all at once, before the program runs.

//* Fast execution: Since the code is already in machine code, it runs very quickly.

//* Platform-dependent: The generated machine code is specific to the CPU architecture and operating system it was compiled for. You need to compile separately for different platforms.

//* Early error detection: Compilers catch syntax and many logical errors during the compilation phase, leading to fewer issues at runtime.

//* Examples: C, C++, Go, Rust

//* What is an Interpreted Language?
//* In an interpreted language, the source code is executed directly, line by line, by an interpreter. There's no separate compilation step that creates an executable file. The interpreter reads each instruction, translates it into machine code, and then immediately executes it.
//* Key Points:

// *Line-by-line execution: The interpreter reads and executes one line at a time.

//* Slower execution: Since each line needs to be translated at runtime, it's generally slower than compiled code.

//* Platform-independent: Because the code is translated at runtime, it's not tied to a specific platform. You can run the same code on different operating systems as long as the language's interpreter is installed.

//* Easier debugging: You can make changes to the code and run it immediately, which can make debugging a bit simpler.

// *Examples: Python, Ruby, and early versions of JavaScript

//* JavaScript: From Interpreted to JIT
//* Initially, JavaScript was considered an interpreted language. Web browsers' JavaScript engines would directly interpret your code line by line and execute it. This was good for quick startup times and interactivity on web pages.

//* However, as web applications became more complex and performance-intensive, the limitations of the interpreted approach became evident:

//* Slow speed: Every time a piece of code executed (especially within loops or frequently called functions), it had to be re-interpreted, which degraded performance.

//* No optimization: The interpreter didn't have an overall view of the code, so it couldn't apply performance optimizations.

//* To address these performance issues, modern JavaScript engines (like Chrome's V8, Firefox's SpiderMonkey, etc.) adopted Just-In-Time (JIT) compilation.

// *What is Just-In-Time (JIT) Compilation?
//* JIT compilation is a hybrid approach that combines the best of both compiled and interpreted methods. In this model, code is initially interpreted into an intermediate bytecode. Then, that bytecode is compiled into machine code at runtime, as the program is running.

//* How JIT works (in JavaScript's context):

//* Interpretation: When JavaScript code first executes, the engine starts by interpreting it. This ensures a fast startup.

//* Profiling: The engine continuously monitors the code's execution. It identifies "hot spots" or "hot code paths" – sections of code that are executed frequently (like functions inside loops).

//* Optimization: For the identified hot spots, the engine applies various optimization techniques (e.g., function inlining, dead code elimination).

//* JIT Compilation: The optimized bytecode is then compiled into highly efficient machine code. This compiled machine code then replaces the original interpreted bytecode for subsequent executions.

// *Re-optimization/De-optimization: If code execution patterns change at runtime, the JIT compiler can re-optimize the code or, if necessary, de-optimize it back to the interpreted mode.

//* Reasons for JIT compilation:

// *Significant performance improvement: JIT optimizes the parts of the code that execute most often, leading to a substantial boost in overall performance.

//* Fast startup: The initial interpretation phase allows for quick program startup.

// *Maintains dynamic nature: JavaScript's dynamic nature (like changing types at runtime) is preserved because compilation happens at runtime.

//* Platform portability: Since compilation occurs at runtime, the engine can generate machine code optimized for the current platform.

//* So, while JavaScript was historically an interpreted language, modern JavaScript engines use JIT compilation to bring its performance much closer to that of compiled code, making it a powerful and efficient language for web applications.
// *************************************************************************************************************************************************************************************
//* TypeScript खुद ना तो एक purely compiled language है और ना ही एक purely interpreted language. यह एक transpiler का उपयोग करता है।

//* चलिए इसे समझते हैं:

//* आप TypeScript Code लिखते हैं (.ts files): आप .ts एक्सटेंशन वाली फाइलों में अपना कोड लिखते हैं, जिसमें आप अपनी variables, functions, और objects के लिए types डिफाइन करते हैं।

//* TypeScript Compiler (TSC - Transpiler): जब आप अपने TypeScript कोड को "चलाने" की कोशिश करते हैं, तो एक स्पेशल प्रोग्राम जिसे TypeScript Compiler (TSC) कहते हैं, वो आपके .ts कोड को लेता है और उसे Plain JavaScript (.js files) में बदल देता है।

// *इस प्रक्रिया को Transpilation कहा जाता है, न कि सिर्फ "compilation"। Transpilation का मतलब है एक source code को उसी abstraction level के दूसरे source code में बदलना (यानी TypeScript को JavaScript में बदलना)। Compilation का मतलब होता है source code को low-level machine code में बदलना।

//* इस दौरान, TSC आपके द्वारा डिफाइन किए गए types की जांच करता है। अगर कोई type mismatch या error होता है, तो यह आपको transpilation phase के दौरान ही बता देता है (यानी कोड चलने से पहले ही)।

//* JavaScript Execution: एक बार जब आपका TypeScript कोड Plain JavaScript में transpile हो जाता है, तो फिर उस JavaScript कोड को किसी भी स्टैंडर्ड JavaScript runtime (जैसे वेब ब्राउज़र में V8 इंजन या Node.js) द्वारा execute किया जाता है। ये JavaScript runtime JIT (Just-In-Time) compilation या interpretation का उपयोग करते हैं जैसा कि हमने पहले डिस्कस किया है।

//* तो, संक्षेप में:

//* TypeScript खुद कोड को सीधे मशीन कोड में compile नहीं करता।

//* यह कोड को सीधे interpret भी नहीं करता।

//* यह एक transpilation step से गुजरता है जो TypeScript कोड को JavaScript में बदलता है।

//* यह Type Checking का काम transpilation के दौरान करता है, जिससे आपको रनटाइम से पहले ही errors का पता चल जाता है।

//* इसलिए, TypeScript को एक "statically typed superset of JavaScript that transpiles to JavaScript" कहना सबसे सटीक होगा।

