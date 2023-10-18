var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "    copyright  "
},
{
  "id": "dedication-1",
  "level": "1",
  "url": "dedication-1.html",
  "type": "Dedication",
  "number": "",
  "title": "Dedication",
  "body": " For ...  "
},
{
  "id": "acknowledgement-1",
  "level": "1",
  "url": "acknowledgement-1.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " We would like to thank Washington College and the Douglass Cater Society of Junior Fellows at Washington College for supporting this work. We would like to thank all the students who tackled this material over the years. It created this unique method of introducing, using and interacting with the material.  "
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": "   About this book:  "
},
{
  "id": "ch-dfas",
  "level": "1",
  "url": "ch-dfas.html",
  "type": "Chapter",
  "number": "1",
  "title": "Determinsitic Finite Automata",
  "body": " Determinsitic Finite Automata  This chapter discusses strategies for understanding finite automata, specifically those with a halting accept and halting reject state. While this is a unique approach for teaching and learning in theory of computation, we find that this is a more natural way for programmers to think about, understand, and ultimately to use finite automata in an intuitive way. Specifically in this chapter we will tackle:    Deterministic Finite Automata (DFA)  Strategies for understanding Deterministic Finite Automata  Strategies for drawing Deterministic Finite Automata     Sets   Set Review  Sets are a collection of objects where there is no ordering and elements are not repeated or counted. Sets can contain other sets or they can be empty. Things get really tricky when you think about a set that contains an empty set, but we will not need to deal with that just yet. Typically we use curly brackets to denote set notation (enumeration notation). Thus is a set that contains elements called , and . That is the same set as . Ordering does not matter. If a were added to this set, we would have a new set . If an were added to this set, it would not change the set because the set already contained an . We will use enumeration notation right away to start describing important elements for this book.  However, we will also often use set-builder notation to describes sets. An example of set-builder notation to describe a set is: . This should be read as the set of all 's where is a string that contains an . We will see this in again in an example shortly. Importantly here, is read as where or such that. You can think of it as a declaration or assignment if you like. The left is a set. a collection of things, where all the things follow the rules on the right.  The only way to get comfortable with these two types of notations is by using them. So, feel free to think of this section as a brief reference on both enumeration notation and set-builder notation. After you tackle these two types of notations a couple times by yourself, you will not need this section as a reference. Until then, you may keep it handy to remind yourself of these two ways to talk about sets.    Machines  To start off thinking about theory of computation, we need a few base terms that we will use in the rest of this book. For the most part, in theory of computation we talk about machines. You can think of these automata or machines like functions. They take input in the form of a string (an ordered sequence of symbols) and they either accept or reject that input. As we continue through the course, we will add more power to the capabilities of these machines in the form of memory. At first, the machines can only switch between a finite set of states. However, as we progress to other sections of this book, we will allow these machines to gain access to different types of infinite memories. Let's look at a few important sets that we will need to discuss our automata.  The Alphabet ( )  alphabet ( ) is a finite set of symbols. Characters in the alphabet can be appended together to create strings. So, a string  string is an ordered list of characters from the alphabet. A collection (set) of strings is also known as a Language ( )  language ( ) .  For example, characters , , and are all included in alphabet . A language will consist of strings created from this alphabet. Order matters. For example and are strings from alphabet .  these example strings may be included in language . You might say: which means is in the language . might have other strings in it as well. We would normally list those in one form of set notation if required. If consisted of just the two strings above, we could fully list them like this: A binary string (like ) would require a binary alphabet ( ). A sample binary language might be: This language consists of any binary string that begins with a 1. So some sample strings in the language are: 1, 10, 11, 100, 101, 110, 111, 1000, 1001 (and infinitely more). The following strings would not be in the language: 0, 01, 001, 010, 011, 0100, 0101 (and also infinitely more).  As we continue in this book, we will use these terms: alphabet, string, and language quite often. Our alphabets are finite sets, the building blocks of everything. Strings are like words, an ordered list of characters. Languages are sets of strings. Our languages are often infinite (having an unbounded number of strings).     Finite Automata (FA)  Finite Automata (FA)  Finite Automata (FA) are State Machine (M)  state machines (M) . We use these machines to describe (recognize) a language. They have no memory storage outside of their finitly many states. They utilize States (Q)  states (Q) to determine if a given string is accepted or rejected by the machine. You may also say that the FA determines if a string exists in the language of the machine. States do track a kind of finite memory by their position. States are represented using circles and machines are made up of states and arrows connecting them. Finite automata have an entry point - so there is also one arrow without a beginning state. This arrow points to the start state which is where the machine will begin processing its input. In our machines there may also be a halt and accept state. It will be denoted with encased in two circles. A halt and reject state ( ) may also be present inside a circle within a circle. This is best described alongside diagrams and images. So, the diagrams below will help. Unlike the finite automata presented in this book, a traditional finite automata will not have halt states. Traditionally an FA will operate continuously (imagine a red light or a vending machine that takes coins). Such a finite automata will not have halt states, but instead will have states represented by a circle withing a circle. Such states are accept states. When an automata finishes processing an input string, it will accept if it is in an accept state (state with a double circle), otherwise it will reject the input string. The approach presented in this book is beneficial because it operates more closely to how you would program software to operate. For example, a language that only needs to look at the first symbol of an input string, could immediately halt and accept or halt and reject based on that symbol. If your need does not include processing the whole string, then we do not bother in the model presented in this book.     Say there is a string . After following the arrows to parse through , it would be accepted by as it finished on the accept state. We now know that , but what is ?  Lanugages can be described using plain language, expressions, set notation, or FAs. The following all represent the same language.         One way to start to understand the language of a FA is by creating test strings from characters in the given alphabet and checking them using a given machine. For , test strings could include 000, 01, 11011, and 100001. By tracing through with each of these four string separately, we see that it accepts the second and fourth strings, the only ones ending in 01. This is a straight-forward example, and many more test strings could be needed to determine the languages of other machines. When wrapping our mind around state machines in this way, it is helpful to think about what each state is representing. Sometimes it is acquired by a sequence like \"have seen a 0 followed by a 1.\" Sometimes it remembers a modulus of sorts like \"seen an even number of 0s\" or \"seen a binary string that represents a number divisible by 3\". Practice with these machines and languages will help acquire this skill and insight but later in the book we will see some other methods for translating machines to expressions which might be useful in this endeavor when the machines are complicated, although although those expressions are often more complicated than the machines themselves!    Deterministic Finite Automata (DFA)  Deterministic Finitie Automata (DFA)  Determinisitic Finite Automatas (DFA) are FAs where the outcome of each possible change of state is defined. When trying to categorize a FA as deterministic, we can look to see if all characters in the alphabet are accounted for at each state. We can look again at      The alphabet of includes 0 and 1. When at the start state , if a 0 is read, we stay at and if a 1 is read, we move to . Each possibility is accounted for. When in state , if a 0 is read, we stay at and if a 1 is read, we move to . Since there is a definied path for each potential character at each state, then the FA is deterministic, or a DFA.  Looking at this in chart form is a helpful way to check for determinism. As there is an entry for each potential character at each state, the FA is deterministic.    Determinism Chart for    1 0         Deterministic   Determinisim  Determinisim means that all transitions of state are unique and completely defined. For example, when we are in a specific state, if there are two possible exits for that state when a character is read, that would not be deterministic because after reading that input symbol, our machine would need to be in two states. Thus, our machine would either need to 'make a guess' as to which state is the one that will lead it to success or it must execute two paths in parallel. Later we will see that we can use empty string transitions to freely jump to another state.     Strategies for Understanding DFAs    Strategies for Drawing DFAs     What is the language of ?     Come up with ten strings in the language of .   1 0  2 101101  3  4 010101  5 0000  6 011  7 10010  8 111001  9 1001  10 0110     Come up with ten strings NOT in the language of .   1 1  2 100  3 10  4 10001  5 1011  6 11111  7 101  8 1101  9 10110  10 001     Do you see any patterns?       It is helpful to look at patterns beyond those that are obvious and to consider ones that require a certain level of interpretation. Consider the test string lists from the hint, but this time the decimal number is included.   1 0 (0)  2 101101 (45)  3 _  4 010101 (21)  5 0000 (0)  6 011 (3)  7 10010 (18)  8 111001 (57)  9 1001 (9)  10 0110 (6)       What is the language of ?     Come up with a few test strings. See any patterns? Focus on the plain language description.         A great first step is to walk through the shortest path to the accept state. This would be 01.  It is also helpful to think about the longest possible path to the accept state or the longest string that would still be accepted. For , that is any number of 1s, followed by at least one 0, followed by at least one 1, and can have any amount of 0s and 1s after that. At least one 0 and at least one 1 is required for to accept.  Another note, the string 01 must be included as a 1 must come after a 0 to get to the accept state .      Build a machine for language 5 ( ).         What is the language of ?     Machines can have other alphabets. What is the alphabet of this machine's language?        Use the diagram below to create a DFA that can track mod 7 for any binary number.      Translate this FA into a complete English description.          Translate this FA into a complete English description.      Translate this FA into an English description.      Translate this FA into a complete English description.      Give an English description of the language of the following FA:       "
},
{
  "id": "objectives-1",
  "level": "2",
  "url": "ch-dfas.html#objectives-1",
  "type": "Objectives",
  "number": "1",
  "title": "",
  "body": "  Deterministic Finite Automata (DFA)  Strategies for understanding Deterministic Finite Automata  Strategies for drawing Deterministic Finite Automata   "
},
{
  "id": "p-9",
  "level": "2",
  "url": "ch-dfas.html#p-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "alphabet ( ) string language ( ) "
},
{
  "id": "p-12",
  "level": "2",
  "url": "ch-dfas.html#p-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Finite Automata (FA) state machines (M) states (Q) "
},
{
  "id": "p-16",
  "level": "2",
  "url": "ch-dfas.html#p-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Determinisitic Finite Automatas (DFA) "
},
{
  "id": "DFADeterminismTable",
  "level": "2",
  "url": "ch-dfas.html#DFADeterminismTable",
  "type": "Table",
  "number": "1.1",
  "title": "Determinism Chart for <span class=\"process-math\">\\(M_1\\)<\/span>",
  "body": " Determinism Chart for    1 0     "
},
{
  "id": "p-19",
  "level": "2",
  "url": "ch-dfas.html#p-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Determinisim "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "ch-dfas.html#exercise-1",
  "type": "Exercise",
  "number": "1.6.1",
  "title": "",
  "body": " What is the language of ?     Come up with ten strings in the language of .   1 0  2 101101  3  4 010101  5 0000  6 011  7 10010  8 111001  9 1001  10 0110     Come up with ten strings NOT in the language of .   1 1  2 100  3 10  4 10001  5 1011  6 11111  7 101  8 1101  9 10110  10 001     Do you see any patterns?       It is helpful to look at patterns beyond those that are obvious and to consider ones that require a certain level of interpretation. Consider the test string lists from the hint, but this time the decimal number is included.   1 0 (0)  2 101101 (45)  3 _  4 010101 (21)  5 0000 (0)  6 011 (3)  7 10010 (18)  8 111001 (57)  9 1001 (9)  10 0110 (6)     "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "ch-dfas.html#exercise-2",
  "type": "Exercise",
  "number": "1.6.2",
  "title": "",
  "body": " What is the language of ?     Come up with a few test strings. See any patterns? Focus on the plain language description.         A great first step is to walk through the shortest path to the accept state. This would be 01.  It is also helpful to think about the longest possible path to the accept state or the longest string that would still be accepted. For , that is any number of 1s, followed by at least one 0, followed by at least one 1, and can have any amount of 0s and 1s after that. At least one 0 and at least one 1 is required for to accept.  Another note, the string 01 must be included as a 1 must come after a 0 to get to the accept state .    "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "ch-dfas.html#exercise-3",
  "type": "Exercise",
  "number": "1.6.3",
  "title": "",
  "body": " Build a machine for language 5 ( ).       "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "ch-dfas.html#exercise-4",
  "type": "Exercise",
  "number": "1.6.4",
  "title": "",
  "body": " What is the language of ?     Machines can have other alphabets. What is the alphabet of this machine's language?      "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "ch-dfas.html#exercise-5",
  "type": "Exercise",
  "number": "1.6.5",
  "title": "",
  "body": " Use the diagram below to create a DFA that can track mod 7 for any binary number.    "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "ch-dfas.html#exercise-6",
  "type": "Exercise",
  "number": "1.6.6",
  "title": "",
  "body": " Translate this FA into a complete English description.        "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "ch-dfas.html#exercise-7",
  "type": "Exercise",
  "number": "1.6.7",
  "title": "",
  "body": " Translate this FA into a complete English description.    "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "ch-dfas.html#exercise-8",
  "type": "Exercise",
  "number": "1.6.8",
  "title": "",
  "body": " Translate this FA into an English description.    "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "ch-dfas.html#exercise-9",
  "type": "Exercise",
  "number": "1.6.9",
  "title": "",
  "body": " Translate this FA into a complete English description.    "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "ch-dfas.html#exercise-10",
  "type": "Exercise",
  "number": "1.6.10",
  "title": "",
  "body": " Give an English description of the language of the following FA:    "
},
{
  "id": "ch-nfas",
  "level": "1",
  "url": "ch-nfas.html",
  "type": "Chapter",
  "number": "2",
  "title": "Non-determinsitic Finite Automata",
  "body": " Non-determinsitic Finite Automata  In this chapter you will learn:  Non-Deterministic Finite Automata (NFA)  Parallelism  The Power Set  Strengths of NFAs     Non-Deterministic Finite Automata (NFA)  Non-Deterministic Finitie Automata (NFA)  Non-Determinisitic Finite Automatas (DFA) are FAs where the outcome of each possible change of state is not completely determined (see the root words at work here). Some quick examples include, a state that transitions to two other states on an input, thus leaving you in multiple states. A state where a transition is not defined, thus ejecting you from the machine. We will even allow free jumps to new states.  Consider .    What is the language of ( )?  Despite being in the alphabet, does not appear in the FA. What could this mean for the language?     any string with two or more s and no s.        Parallelism  NFAs make it possible to exist in two states at once. You might think of this as Parallelism  parallelism . Parallelism can occur because a state has multiple paths for the same character. It can also happen because of an Empty String Transition  empty string transition . Empty string transitions are free jumps to another state. Sometimes these multiple paths and free jumps are called guesses when discussing FAs. Only one execution path must lead to an accept, to accept a string in these conditions.   is an example of parallelism caused by a character having two defined paths from the same state. Both states and would be active if the first character of the given string was 1.    There are two strategies for tracking which states you are in. The first is quite simple, track them with your fingers. The second, is to create a transition table similar to that in .   Determinism Chart for    1 0          contains an example of an NFA caused by an empty string transition. When processing a string like \"bba\" we might start by tracking with our fingers. They start in but quickly we see we exist in and as well. When the first \"b\" is read, we fall off the first two states and move from to . To track this with a computer, given the knowledge we have so far, we would have to use some form of guess and check with backtracking (like a depth-first search) or we could create children processes to handle the different traces to run things in parallel. What a conundrum! Let us see if we can do something about that in the future.      The Power Set  The Power Set (P)  power set (P) is the set of all subsets of the given states. It also includes .  The power set will have as many sets in it as with being the number of states in the machine. The power set for a generic machice with states , , and . Would look like this:   Since we might think about NFAs as the ability to exist in multiple states, the power set is a useful tool. If we trace our way through an NFA, we'll end up in some set of states. That will correspond to one of the entries in the power set. That's a useful idea that we'll use in just a moment.   Strengths of NFAs  NFAs are often pretty easy to generate for languages that include a certain set of characters. Such as:  Begins with 01  Contains 01  Ends with 01   Some of these are not so hard for DFAs but, as we work with things we find that the shortcuts of NFAs allow us to write the machines for such languages more quickly. When your language includes an \"or\" in its description, it turns out that's also perfect for an NFA. Since we can make guesses, we can build a machine for each side of the \"or\" and push them together with empty string transitions. Looking back at , we might describe this language with an \"or\". We take either the top path or the bottom path. The language then must be all strings that are \"aab\" or that begin with \"bb\" followed by any number of a's.    Build a NFA for the following language where :        The maximum size of the power set is where is the number of states in the machine. Where does this come from?   There is always a choice to be in a state or not.   There are two choices with each state, whether to be in it or to not be in it. This means that there are two options for each state, making the maximum size of the power set .    Create a power set for a FA with the following states: , , , and .         Craft a FA from this English description.  All strings that begin with a 0, end with a 0, and may contain any number of other s and s. Assume .       Craft a FA from this English description:     Construct a FA from this English description. Assume .     The language that consists of all strings that contain 101.    Give a FA of the following English description of a language with the alphabet, :  The language consists of all strings that contain 1337.     "
},
{
  "id": "objectives-2",
  "level": "2",
  "url": "ch-nfas.html#objectives-2",
  "type": "Objectives",
  "number": "2",
  "title": "",
  "body": "In this chapter you will learn:  Non-Deterministic Finite Automata (NFA)  Parallelism  The Power Set  Strengths of NFAs   "
},
{
  "id": "p-41",
  "level": "2",
  "url": "ch-nfas.html#p-41",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Non-Determinisitic Finite Automatas (DFA) "
},
{
  "id": "p-46",
  "level": "2",
  "url": "ch-nfas.html#p-46",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parallelism empty string transition "
},
{
  "id": "NFADeterminismTable",
  "level": "2",
  "url": "ch-nfas.html#NFADeterminismTable",
  "type": "Table",
  "number": "2.1",
  "title": "Determinism Chart for <span class=\"process-math\">\\(M_1\\)<\/span>",
  "body": " Determinism Chart for    1 0        "
},
{
  "id": "p-50",
  "level": "2",
  "url": "ch-nfas.html#p-50",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "power set (P) "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "ch-nfas.html#exercise-11",
  "type": "Exercise",
  "number": "2.5.1",
  "title": "",
  "body": " Build a NFA for the following language where :      "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "ch-nfas.html#exercise-12",
  "type": "Exercise",
  "number": "2.5.2",
  "title": "",
  "body": " The maximum size of the power set is where is the number of states in the machine. Where does this come from?   There is always a choice to be in a state or not.   There are two choices with each state, whether to be in it or to not be in it. This means that there are two options for each state, making the maximum size of the power set .  "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "ch-nfas.html#exercise-13",
  "type": "Exercise",
  "number": "2.5.3",
  "title": "",
  "body": " Create a power set for a FA with the following states: , , , and .       "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "ch-nfas.html#exercise-14",
  "type": "Exercise",
  "number": "2.5.4",
  "title": "",
  "body": " Craft a FA from this English description.  All strings that begin with a 0, end with a 0, and may contain any number of other s and s. Assume .     "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "ch-nfas.html#exercise-15",
  "type": "Exercise",
  "number": "2.5.5",
  "title": "",
  "body": " Craft a FA from this English description:   "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "ch-nfas.html#exercise-16",
  "type": "Exercise",
  "number": "2.5.6",
  "title": "",
  "body": " Construct a FA from this English description. Assume .   "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "ch-nfas.html#exercise-17",
  "type": "Exercise",
  "number": "2.5.7",
  "title": "",
  "body": " The language that consists of all strings that contain 101.  "
},
{
  "id": "exercise-18",
  "level": "2",
  "url": "ch-nfas.html#exercise-18",
  "type": "Exercise",
  "number": "2.5.8",
  "title": "",
  "body": " Give a FA of the following English description of a language with the alphabet, :  The language consists of all strings that contain 1337.  "
},
{
  "id": "ch-nfa-to-dfa",
  "level": "1",
  "url": "ch-nfa-to-dfa.html",
  "type": "Chapter",
  "number": "3",
  "title": "NFA and DFA relationships",
  "body": " NFA and DFA relationships  In this chapter you will learn:  Non-Deterministic Finite Automata (NFA)  Parallelism  The Power Set  Strengths of NFAs     Finite Number of States  As introduced in , there is a limit to the amount of states that a NFA can have. This means that all NFAs can become DFAs as the transitions on each character can be determined for each state. The length of the power set is also the greatest amount of states that a DFA made from a NFA can have.   Getting from a NFA to a DFA  For this, consider .     is a NFA. An at will lead to both and . This is an example of parallelism. What is the maximum number of states a DFA created from could have?    . A DFA made from can have up to states as has states and .   How is a NFA made into a DFA? The goal is to make a set of all posible destination states for each character from each state. In , a at could go to or . A at would go to an state.    Try to create the states that would lead to. There is a posibility that each state in a set is active. If one state in a set is an accept state, then the state that includes it in its set is also an accept state.        When there is a set including multiple states, track the destiation states for all characters in the language. Ask yourself questions such as: where would an a go after ?, where would a 1 go after ?, and where would a 0 go after . Try to complete the next step of the diagram.      It is important to note, that if the outcoming state set of a chaacter already exists that state sholuld be linked to instead of another created. Try creating the final FA with this in mind.            What is the maximum number of states in a DFA made from ?        Create a DFA based on .       This small NFA appears to be challenging when trying to decipher its language. Use subset construction to converst it into a DFA and then decipher its language.      Convert the below NFA to a DFA using the subset construction.      Convert the below NFA into a DFA.      Convert the below NFA into a DFA, using our subset construction.      Convert the NFA below into a DFA.      Convert the following NFA into a DFA:       "
},
{
  "id": "objectives-3",
  "level": "2",
  "url": "ch-nfa-to-dfa.html#objectives-3",
  "type": "Objectives",
  "number": "3",
  "title": "",
  "body": "In this chapter you will learn:  Non-Deterministic Finite Automata (NFA)  Parallelism  The Power Set  Strengths of NFAs   "
},
{
  "id": "assemblage-NFADFAConversion",
  "level": "2",
  "url": "ch-nfa-to-dfa.html#assemblage-NFADFAConversion",
  "type": "Exploration",
  "number": "2",
  "title": "Getting from a NFA to a DFA.",
  "body": " Getting from a NFA to a DFA  For this, consider .     is a NFA. An at will lead to both and . This is an example of parallelism. What is the maximum number of states a DFA created from could have?    . A DFA made from can have up to states as has states and .   How is a NFA made into a DFA? The goal is to make a set of all posible destination states for each character from each state. In , a at could go to or . A at would go to an state.    Try to create the states that would lead to. There is a posibility that each state in a set is active. If one state in a set is an accept state, then the state that includes it in its set is also an accept state.        When there is a set including multiple states, track the destiation states for all characters in the language. Ask yourself questions such as: where would an a go after ?, where would a 1 go after ?, and where would a 0 go after . Try to complete the next step of the diagram.      It is important to note, that if the outcoming state set of a chaacter already exists that state sholuld be linked to instead of another created. Try creating the final FA with this in mind.      "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "ch-nfa-to-dfa.html#exercise-19",
  "type": "Exercise",
  "number": "3.2.1",
  "title": "",
  "body": "   What is the maximum number of states in a DFA made from ?      "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "ch-nfa-to-dfa.html#exercise-20",
  "type": "Exercise",
  "number": "3.2.2",
  "title": "",
  "body": " Create a DFA based on .     "
},
{
  "id": "exercise-21",
  "level": "2",
  "url": "ch-nfa-to-dfa.html#exercise-21",
  "type": "Exercise",
  "number": "3.2.3",
  "title": "",
  "body": " This small NFA appears to be challenging when trying to decipher its language. Use subset construction to converst it into a DFA and then decipher its language.    "
},
{
  "id": "exercise-22",
  "level": "2",
  "url": "ch-nfa-to-dfa.html#exercise-22",
  "type": "Exercise",
  "number": "3.2.4",
  "title": "",
  "body": " Convert the below NFA to a DFA using the subset construction.    "
},
{
  "id": "exercise-23",
  "level": "2",
  "url": "ch-nfa-to-dfa.html#exercise-23",
  "type": "Exercise",
  "number": "3.2.5",
  "title": "",
  "body": " Convert the below NFA into a DFA.    "
},
{
  "id": "exercise-24",
  "level": "2",
  "url": "ch-nfa-to-dfa.html#exercise-24",
  "type": "Exercise",
  "number": "3.2.6",
  "title": "",
  "body": " Convert the below NFA into a DFA, using our subset construction.    "
},
{
  "id": "exercise-25",
  "level": "2",
  "url": "ch-nfa-to-dfa.html#exercise-25",
  "type": "Exercise",
  "number": "3.2.7",
  "title": "",
  "body": " Convert the NFA below into a DFA.    "
},
{
  "id": "exercise-26",
  "level": "2",
  "url": "ch-nfa-to-dfa.html#exercise-26",
  "type": "Exercise",
  "number": "3.2.8",
  "title": "",
  "body": " Convert the following NFA into a DFA:    "
},
{
  "id": "ch-rex",
  "level": "1",
  "url": "ch-rex.html",
  "type": "Chapter",
  "number": "4",
  "title": "Regular Expressions",
  "body": " Regular Expressions  In this chapter you will learn:  Regular Expressions  Regular Expressions in NFAs     Regular Expressions   Regular Expressions (REX) Regular Expressions (REX) are often used in a variety of computational areas including: searching, verficiation, and grabbing lexical pieces in a programming language. In this book, they will be used to describe languages as introduced in .  REs can include:   Symbols from the alphabet    Concatenations - one followed by another    Parenthesis    Choices like and    Repeat any number of times      Repeating  Repition (*) is when a character, group of characters, or choice of characters is reapeated and concatenated together an undefined number of times.   What strings can be made from ?  Some strings are:         A wide array of strings can be made from a simple expression declaration.     Regular Expressions in NFAs  NFAs can be used to easily represent REs. The best way to approach this is to go one chacter or character grouping at a time.    Begins with 01 Contains 01                   Ends with 01                Given , make a Regular Expression for any binary string, followed by an , followed by one or more binary strings, and separated by .   An example string is         Given , create a Regular Expression that recognizes phone numbers of the form: . As a shortcut you may write to mean .        What is the language of this Regular Expression? Your answer does not need to be in mathematical notation.        What is the language of this Regular Expression? Your answer does not need to be in mathematical notation.   Some example strings inlcude:              Create an FA from the Regular Expression.     Translate the REX below into a FA.     Translate the REX below into a FA.     Give a FA that corresponds to this REX with alphabet, :      "
},
{
  "id": "objectives-4",
  "level": "2",
  "url": "ch-rex.html#objectives-4",
  "type": "Objectives",
  "number": "4",
  "title": "",
  "body": "In this chapter you will learn:  Regular Expressions  Regular Expressions in NFAs   "
},
{
  "id": "p-84",
  "level": "2",
  "url": "ch-rex.html#p-84",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Regular Expressions (REX) "
},
{
  "id": "p-86",
  "level": "2",
  "url": "ch-rex.html#p-86",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Repition (*) "
},
{
  "id": "exploration-3",
  "level": "2",
  "url": "ch-rex.html#exploration-3",
  "type": "Exploration",
  "number": "3",
  "title": "",
  "body": " What strings can be made from ?  Some strings are:         A wide array of strings can be made from a simple expression declaration.  "
},
{
  "id": "exercise-27",
  "level": "2",
  "url": "ch-rex.html#exercise-27",
  "type": "Exercise",
  "number": "4.3.1",
  "title": "",
  "body": " Given , make a Regular Expression for any binary string, followed by an , followed by one or more binary strings, and separated by .   An example string is       "
},
{
  "id": "exercise-28",
  "level": "2",
  "url": "ch-rex.html#exercise-28",
  "type": "Exercise",
  "number": "4.3.2",
  "title": "",
  "body": " Given , create a Regular Expression that recognizes phone numbers of the form: . As a shortcut you may write to mean .      "
},
{
  "id": "exercise-29",
  "level": "2",
  "url": "ch-rex.html#exercise-29",
  "type": "Exercise",
  "number": "4.3.3",
  "title": "",
  "body": " What is the language of this Regular Expression? Your answer does not need to be in mathematical notation.      "
},
{
  "id": "exercise-30",
  "level": "2",
  "url": "ch-rex.html#exercise-30",
  "type": "Exercise",
  "number": "4.3.4",
  "title": "",
  "body": " What is the language of this Regular Expression? Your answer does not need to be in mathematical notation.   Some example strings inlcude:            "
},
{
  "id": "exercise-31",
  "level": "2",
  "url": "ch-rex.html#exercise-31",
  "type": "Exercise",
  "number": "4.3.5",
  "title": "",
  "body": " Create an FA from the Regular Expression.   "
},
{
  "id": "exercise-32",
  "level": "2",
  "url": "ch-rex.html#exercise-32",
  "type": "Exercise",
  "number": "4.3.6",
  "title": "",
  "body": " Translate the REX below into a FA.   "
},
{
  "id": "exercise-33",
  "level": "2",
  "url": "ch-rex.html#exercise-33",
  "type": "Exercise",
  "number": "4.3.7",
  "title": "",
  "body": " Translate the REX below into a FA.   "
},
{
  "id": "exercise-34",
  "level": "2",
  "url": "ch-rex.html#exercise-34",
  "type": "Exercise",
  "number": "4.3.8",
  "title": "",
  "body": " Give a FA that corresponds to this REX with alphabet, :   "
},
{
  "id": "ch-rex-to-nfa",
  "level": "1",
  "url": "ch-rex-to-nfa.html",
  "type": "Chapter",
  "number": "5",
  "title": "Converting REX to NFAs",
  "body": " Converting REX to NFAs  In this chapter you will learn:  Regular Expressions  Regular Expressions in NFAs     Converting Regular Expressions to NFAs  Different structures of characters can be included in Regular expressions as covered in . Displaying these structures in NFAs can follow these simple constructions:    Terminals:       Concatenation:       Or:       Repeats:       Ultimately, most REs will feature mulitple of the structures above, so they will need to be combined.    Building NFAs from REs  The best way to approach creating NFAs from REs is to go one character or section at a time. The Explorations below were created with that approach.   Let's walk through the creation of an NFA that combines some of the structures from . Consider First, we will focus on the . This can be accomplished using the structure for concatantaion.    Second, we will add in the repeating element of . As a way to account for multiple characters repeating, we can lean on NFA's paralleism to add an empty string transition.    Now that the term has been taken care of, the needs to be considered. We will introduce another empty string transition as shown above.    The final part of is , this is just another instance of concatenation! Which makes this the final NFA for .      Consider First, we look at . This is a terminal structure.    Second, we will add in the OR element.    We now need to turn our attention to the , which is a terminal followed by a repeating structure.    There is a 1 that follows the . Since there is an empty string transition, it's terminal structure can be added to the state between 1 and 0.    Finally, two more empty string transitions must be added at the entire REX is repeatable. It also moves the accept state to the first one in the machine.        Convert the following REX into a FA, using the construciton method shown in           Convert the following REX into a FA, using the construciton method.          Create an FA for the following Regular Expression.  Here, is used to represent any alphabetic symbol.   There would typically by states between each character, but in the interest of space, the FA has been compressed.      Create an FA for the following regular expression.  Here, is used to represent any decimal digit.   There would typically be states between each character, but in the interest of space, the FA has been compressed.      Represent the below REX as a FA.      "
},
{
  "id": "objectives-5",
  "level": "2",
  "url": "ch-rex-to-nfa.html#objectives-5",
  "type": "Objectives",
  "number": "5",
  "title": "",
  "body": "In this chapter you will learn:  Regular Expressions  Regular Expressions in NFAs   "
},
{
  "id": "exploration-4",
  "level": "2",
  "url": "ch-rex-to-nfa.html#exploration-4",
  "type": "Exploration",
  "number": "4",
  "title": "",
  "body": " Let's walk through the creation of an NFA that combines some of the structures from . Consider First, we will focus on the . This can be accomplished using the structure for concatantaion.    Second, we will add in the repeating element of . As a way to account for multiple characters repeating, we can lean on NFA's paralleism to add an empty string transition.    Now that the term has been taken care of, the needs to be considered. We will introduce another empty string transition as shown above.    The final part of is , this is just another instance of concatenation! Which makes this the final NFA for .    "
},
{
  "id": "exploration-5",
  "level": "2",
  "url": "ch-rex-to-nfa.html#exploration-5",
  "type": "Exploration",
  "number": "5",
  "title": "",
  "body": " Consider First, we look at . This is a terminal structure.    Second, we will add in the OR element.    We now need to turn our attention to the , which is a terminal followed by a repeating structure.    There is a 1 that follows the . Since there is an empty string transition, it's terminal structure can be added to the state between 1 and 0.    Finally, two more empty string transitions must be added at the entire REX is repeatable. It also moves the accept state to the first one in the machine.    "
},
{
  "id": "exercise-35",
  "level": "2",
  "url": "ch-rex-to-nfa.html#exercise-35",
  "type": "Exercise",
  "number": "5.3.1",
  "title": "",
  "body": " Convert the following REX into a FA, using the construciton method shown in         "
},
{
  "id": "exercise-36",
  "level": "2",
  "url": "ch-rex-to-nfa.html#exercise-36",
  "type": "Exercise",
  "number": "5.3.2",
  "title": "",
  "body": " Convert the following REX into a FA, using the construciton method.        "
},
{
  "id": "exercise-37",
  "level": "2",
  "url": "ch-rex-to-nfa.html#exercise-37",
  "type": "Exercise",
  "number": "5.3.3",
  "title": "",
  "body": " Create an FA for the following Regular Expression.  Here, is used to represent any alphabetic symbol.   There would typically by states between each character, but in the interest of space, the FA has been compressed.    "
},
{
  "id": "exercise-38",
  "level": "2",
  "url": "ch-rex-to-nfa.html#exercise-38",
  "type": "Exercise",
  "number": "5.3.4",
  "title": "",
  "body": " Create an FA for the following regular expression.  Here, is used to represent any decimal digit.   There would typically be states between each character, but in the interest of space, the FA has been compressed.    "
},
{
  "id": "exercise-39",
  "level": "2",
  "url": "ch-rex-to-nfa.html#exercise-39",
  "type": "Exercise",
  "number": "5.3.5",
  "title": "",
  "body": " Represent the below REX as a FA.   "
},
{
  "id": "ch-fa-to-rex",
  "level": "1",
  "url": "ch-fa-to-rex.html",
  "type": "Chapter",
  "number": "6",
  "title": "Using Rips to Convert FAs to REX",
  "body": " Using Rips to Convert FAs to REX  In this chapter you will learn:  How to rip     Rips   Rip  Ripping is the process of removing states from an FA to determine the REX of the machine. The outcome of this process is a Generalized Non-Finite Automata (GNFA)  Generalized Non-Finite Automata (GNFA) .  How to rip:   Add a new start state with an empty string transition to the old start state.    Add a new accept state with empty string transition(s) from the old accept state(s).    Begin ripping states by considering one at a time:   Consider all states with a transition to or away from the ripped state.    For every pair of those states, you must update the REX on those tranitions.      With removed, we have:       and may be the same state, this will especially occur when ripping the last state.       Repeat the process until all states besides the start and accept states have been ripped.      Consider :     Add a new start state with an empty string transition to the old start state.      Add a new accept state with empty string transition(s) from the old accept state(s)      Rip :      Rip :           Create a GNFA from using rips.    Rip , then , then .                        Consider .    What do expect the language of this machine to be? Rip , then , then , and then .            Start.      D: 2 transitions in, 1 transition out, , so 2 new arrows      C: 1 transition in, 1 transition out, , so 1 new arrow      B: 1 transition in, 1 transition out, , so 1 new addition      A: 1 transition in, 1 transition out, , so 1 new arrow         Consider .    What do expect the language of this machine to be? Rip , then , then , and then .            Start.      B: 2 transitions in and 2 transitions out, , so 4 new arrows      C: 2 transitions in and 2 transitions out, , so 2 new       A: 2 transitions in and 1 transition out, , so 2 new arrows         Take the mod 3 DFA shown below and find an REX for it by ripping states. Rip in this order: 2, 1, 0. Show your steps.      Translate the following FA into a REX using rips.    The recommended order of rips is: , A, B, C    Translate the FA below into a REX using rips.    The recommended order of rips is: D, C, B, A    Translate the FA below into a REX using rips.    The recommended order of rips is: D, C, B, A    Translate the FA below into a REX using rips.      Use rips to convert the following FA into a REX. Show each step and every rip.       "
},
{
  "id": "objectives-6",
  "level": "2",
  "url": "ch-fa-to-rex.html#objectives-6",
  "type": "Objectives",
  "number": "6",
  "title": "",
  "body": "In this chapter you will learn:  How to rip   "
},
{
  "id": "p-130",
  "level": "2",
  "url": "ch-fa-to-rex.html#p-130",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Ripping Generalized Non-Finite Automata (GNFA) "
},
{
  "id": "exploration-6",
  "level": "2",
  "url": "ch-fa-to-rex.html#exploration-6",
  "type": "Exploration",
  "number": "6",
  "title": "",
  "body": " Consider :     Add a new start state with an empty string transition to the old start state.      Add a new accept state with empty string transition(s) from the old accept state(s)      Rip :      Rip :       "
},
{
  "id": "exercise-40",
  "level": "2",
  "url": "ch-fa-to-rex.html#exercise-40",
  "type": "Exercise",
  "number": "6.2.1",
  "title": "",
  "body": " Create a GNFA from using rips.    Rip , then , then .                      "
},
{
  "id": "exercise-41",
  "level": "2",
  "url": "ch-fa-to-rex.html#exercise-41",
  "type": "Exercise",
  "number": "6.2.2",
  "title": "",
  "body": " Consider .    What do expect the language of this machine to be? Rip , then , then , and then .            Start.      D: 2 transitions in, 1 transition out, , so 2 new arrows      C: 1 transition in, 1 transition out, , so 1 new arrow      B: 1 transition in, 1 transition out, , so 1 new addition      A: 1 transition in, 1 transition out, , so 1 new arrow       "
},
{
  "id": "exercise-42",
  "level": "2",
  "url": "ch-fa-to-rex.html#exercise-42",
  "type": "Exercise",
  "number": "6.2.3",
  "title": "",
  "body": " Consider .    What do expect the language of this machine to be? Rip , then , then , and then .            Start.      B: 2 transitions in and 2 transitions out, , so 4 new arrows      C: 2 transitions in and 2 transitions out, , so 2 new       A: 2 transitions in and 1 transition out, , so 2 new arrows       "
},
{
  "id": "exercise-43",
  "level": "2",
  "url": "ch-fa-to-rex.html#exercise-43",
  "type": "Exercise",
  "number": "6.2.4",
  "title": "",
  "body": " Take the mod 3 DFA shown below and find an REX for it by ripping states. Rip in this order: 2, 1, 0. Show your steps.    "
},
{
  "id": "exercise-44",
  "level": "2",
  "url": "ch-fa-to-rex.html#exercise-44",
  "type": "Exercise",
  "number": "6.2.5",
  "title": "",
  "body": " Translate the following FA into a REX using rips.    The recommended order of rips is: , A, B, C  "
},
{
  "id": "exercise-45",
  "level": "2",
  "url": "ch-fa-to-rex.html#exercise-45",
  "type": "Exercise",
  "number": "6.2.6",
  "title": "",
  "body": " Translate the FA below into a REX using rips.    The recommended order of rips is: D, C, B, A  "
},
{
  "id": "exercise-46",
  "level": "2",
  "url": "ch-fa-to-rex.html#exercise-46",
  "type": "Exercise",
  "number": "6.2.7",
  "title": "",
  "body": " Translate the FA below into a REX using rips.    The recommended order of rips is: D, C, B, A  "
},
{
  "id": "exercise-47",
  "level": "2",
  "url": "ch-fa-to-rex.html#exercise-47",
  "type": "Exercise",
  "number": "6.2.8",
  "title": "",
  "body": " Translate the FA below into a REX using rips.    "
},
{
  "id": "exercise-48",
  "level": "2",
  "url": "ch-fa-to-rex.html#exercise-48",
  "type": "Exercise",
  "number": "6.2.9",
  "title": "",
  "body": " Use rips to convert the following FA into a REX. Show each step and every rip.    "
},
{
  "id": "ch-fa-closure",
  "level": "1",
  "url": "ch-fa-closure.html",
  "type": "Chapter",
  "number": "7",
  "title": "Closure and Regular Languages",
  "body": " Closure and Regular Languages  In this chapter you will learn:  Discrete Math Review  Closure     Closure   Closure A set is closed under an operation when any application of that operation on an element (or elements) in that set always results in an element in the set.     Each column is an element of the set.   If I take an element and swap its top character with the top character of another element, do I stay in the set?    How about swapping bottom characters?    What if I change the bottom character to a ?    How about swapping s and s?    How about swapping middle characters to s, s, or s?       Closure in Natural Numbers  Consider a few simple operations applied to the natural numbers.      Addition - take any two and add them. Is the result always in ?   If yes, are closed under addition    If no, are not closed under addition and a counter-example needs to be provided      Yes.     Subtraction - take any two and subtract one from the other. Is the result always in ?   If yes, are closed under subtraction    If no, are not closed under subtraction and a counter-example needs to be provided      No. Negative numbers are not included in the .        Multiplication - take any two and multiply them. Is the result always in ?   If yes, are closed under multiplication    If no, are not closed under multiplication and a counter-example needs to be provided      Yes.     Division - take any two and divide them. Is the result always in ?   If yes, are closed under division    If no, are not closed under division and a counter-example needs to be provided      No.        Negation - take any and make it negative. Is the result always in ?   If yes, are closed under negation    If no, are not closed under negation and a counter-example needs to be provided      No.       Some additional operations could be: reciprocals, modulus, exponentiation, and factorial.   If a set is closed under certain operations is helpful to know for type safety as a developer and in proofs.   Implications  We know are closed under addition. This means we know that if and then .  This is an example of an Implication  implication .          A B    1 1    1 0    0 1    0 0       Logic in Closure  Here is another binary operator:      A B C AB      0 0 0 0     0 0 1 0     0 1 0 0     0 1 1 0     1 0 0 0     1 0 1 0     1 1 0 1     1 1 1 1      Given the above logic table, we now know that is logically equivalent to .  Let us say we know is not true and is true. What must be?   Not true.   That is a form of the contrapositive.  For this situation, means and means . So, these statements are the same, but if we know , then either A or B is untrue.  This is telling us that given , the boolean must be true. So,     These conclusions are very important for understanding closure.     How to Write a Closure Proof  These three posibilities are the most important things when writing closure proofs:     Let us say we are given , , and .   What do we know about ?   What if we know and ?   What do we know about ?   What if we know and ?   What do we know about ?   Within all of the scenarios, the arguments must follow the important possibilities.    Closure Proven through Construction  Regular Languages are closed under many operations. Closure can be proven using the construction proof technique.   RLs Closed under Union   Union RL closure under union follows the basic progression: if is a RL and is a RL, then is a RL.  If is a RL, some DFA describes it. It has a start state and a set of accept states. We also added empty string tranistions from the original accept states to a singluar new accept state.     This is the same for .     Using these two machines, we can create the union machine by making a new start state with empty string transitions to the start states for and .     Since this union machine is an NFA, it describes a RL.    RLs Closed under Concatenation  If is a RL and is a RL, then is a RL. This means all strings created by first choosing a string in and then choosing a string in . So,    A good way to approach this is to start where we did last time, by drawing out machines for each language.       RLs Closed under Repitition  Suppose , concatenating L_1 with itself 0 or more times.     Use an empty string transition as a loop.        Closure by Complementation  complementation contains an interesting happening. is all strings that can be made with the alphabet but are not in . In a DFA, when we're done processing a string, we are either in an accept state or not. So, can be created by inverting the accept and reject states.   RLs Closed under Intersection   Intersection  Intersection of is any string that is accepted in and . It is very useful in closure proofs and in crafting NFAs for languages that use the logic of . For example look at these two machines:         Try traceing the path through both machines and only accept if both machines accept. In a more systematic way, consider the states and create those machines.   Here are some examples of the step through thinking.    States with occur when the string has even length.     is when it is odd     says the last seen symbol was a 0     is when it was a 1       So, it turns out we can use this to build DFAs of challenging languages!   RLs are closed under other operatons too, like reversal. Their closure can be proven using the methods above or through counterexamples.    Create a DFA from these two languages.     Machine for      Machine for        The state can be used as a shortcut since we'll never leave it, we do not have to trace what happens if either path leads to it.    Prove that the union of and results in a RL.      It is known that the language of all binary strings with an equal number of 0s and 1s is not regular. Prove that the language below is not regular using closure.     RLs are closed under intersection. Prove that the language of strings with any number of a's, b's, and c's and with an equal number of d's and e's is not regular. Use the closure fact above and that is not regular to prove this language is not regular.    RLs are closed under intersection, union, and a variety of other operations. In each of the following situations state whether is regular, irregular, or either. Take care to read each carefully as ordering changes.         is regular and is regular.        is regular and is irregular.        is regular and is regular.        is regular and is irregular.       Given is not regular. Given is . Use closure to explain what is known about and why.    Use closure and the givens to prove that the language, L, with , is not regular. Be thorough in your explanation.   You've been given the fact that the language, K, is not a regular language.        "
},
{
  "id": "objectives-7",
  "level": "2",
  "url": "ch-fa-closure.html#objectives-7",
  "type": "Objectives",
  "number": "7",
  "title": "",
  "body": "In this chapter you will learn:  Discrete Math Review  Closure   "
},
{
  "id": "p-174",
  "level": "2",
  "url": "ch-fa-closure.html#p-174",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "closed "
},
{
  "id": "exploration-7",
  "level": "2",
  "url": "ch-fa-closure.html#exploration-7",
  "type": "Exploration",
  "number": "7",
  "title": "",
  "body": "   Each column is an element of the set.   If I take an element and swap its top character with the top character of another element, do I stay in the set?    How about swapping bottom characters?    What if I change the bottom character to a ?    How about swapping s and s?    How about swapping middle characters to s, s, or s?     "
},
{
  "id": "exploration-8",
  "level": "2",
  "url": "ch-fa-closure.html#exploration-8",
  "type": "Exploration",
  "number": "8",
  "title": "Closure in Natural Numbers.",
  "body": " Closure in Natural Numbers  Consider a few simple operations applied to the natural numbers.      Addition - take any two and add them. Is the result always in ?   If yes, are closed under addition    If no, are not closed under addition and a counter-example needs to be provided      Yes.     Subtraction - take any two and subtract one from the other. Is the result always in ?   If yes, are closed under subtraction    If no, are not closed under subtraction and a counter-example needs to be provided      No. Negative numbers are not included in the .        Multiplication - take any two and multiply them. Is the result always in ?   If yes, are closed under multiplication    If no, are not closed under multiplication and a counter-example needs to be provided      Yes.     Division - take any two and divide them. Is the result always in ?   If yes, are closed under division    If no, are not closed under division and a counter-example needs to be provided      No.        Negation - take any and make it negative. Is the result always in ?   If yes, are closed under negation    If no, are not closed under negation and a counter-example needs to be provided      No.       Some additional operations could be: reciprocals, modulus, exponentiation, and factorial.  "
},
{
  "id": "exploration-9",
  "level": "2",
  "url": "ch-fa-closure.html#exploration-9",
  "type": "Exploration",
  "number": "9",
  "title": "Implications.",
  "body": " Implications  We know are closed under addition. This means we know that if and then .  This is an example of an Implication  implication .          A B    1 1    1 0    0 1    0 0     "
},
{
  "id": "exploration-10",
  "level": "2",
  "url": "ch-fa-closure.html#exploration-10",
  "type": "Exploration",
  "number": "10",
  "title": "Logic in Closure.",
  "body": " Logic in Closure  Here is another binary operator:      A B C AB      0 0 0 0     0 0 1 0     0 1 0 0     0 1 1 0     1 0 0 0     1 0 1 0     1 1 0 1     1 1 1 1      Given the above logic table, we now know that is logically equivalent to .  Let us say we know is not true and is true. What must be?   Not true.   That is a form of the contrapositive.  For this situation, means and means . So, these statements are the same, but if we know , then either A or B is untrue.  This is telling us that given , the boolean must be true. So,     These conclusions are very important for understanding closure.  "
},
{
  "id": "proof-1",
  "level": "2",
  "url": "ch-fa-closure.html#proof-1",
  "type": "Proof",
  "number": "7.3.1",
  "title": "RLs Closed under Union.",
  "body": " RLs Closed under Union   Union RL closure under union follows the basic progression: if is a RL and is a RL, then is a RL.  If is a RL, some DFA describes it. It has a start state and a set of accept states. We also added empty string tranistions from the original accept states to a singluar new accept state.     This is the same for .     Using these two machines, we can create the union machine by making a new start state with empty string transitions to the start states for and .     Since this union machine is an NFA, it describes a RL.  "
},
{
  "id": "exploration-11",
  "level": "2",
  "url": "ch-fa-closure.html#exploration-11",
  "type": "Exploration",
  "number": "11",
  "title": "RLs Closed under Concatenation.",
  "body": " RLs Closed under Concatenation  If is a RL and is a RL, then is a RL. This means all strings created by first choosing a string in and then choosing a string in . So,    A good way to approach this is to start where we did last time, by drawing out machines for each language.     "
},
{
  "id": "exploration-12",
  "level": "2",
  "url": "ch-fa-closure.html#exploration-12",
  "type": "Exploration",
  "number": "12",
  "title": "RLs Closed under Repitition.",
  "body": " RLs Closed under Repitition  Suppose , concatenating L_1 with itself 0 or more times.     Use an empty string transition as a loop.       "
},
{
  "id": "p-226",
  "level": "2",
  "url": "ch-fa-closure.html#p-226",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complementation "
},
{
  "id": "exploration-13",
  "level": "2",
  "url": "ch-fa-closure.html#exploration-13",
  "type": "Exploration",
  "number": "13",
  "title": "RLs Closed under Intersection.",
  "body": " RLs Closed under Intersection   Intersection  Intersection of is any string that is accepted in and . It is very useful in closure proofs and in crafting NFAs for languages that use the logic of . For example look at these two machines:         Try traceing the path through both machines and only accept if both machines accept. In a more systematic way, consider the states and create those machines.   Here are some examples of the step through thinking.    States with occur when the string has even length.     is when it is odd     says the last seen symbol was a 0     is when it was a 1       So, it turns out we can use this to build DFAs of challenging languages!  "
},
{
  "id": "exercise-49",
  "level": "2",
  "url": "ch-fa-closure.html#exercise-49",
  "type": "Exercise",
  "number": "7.3.1",
  "title": "",
  "body": " Create a DFA from these two languages.     Machine for      Machine for        The state can be used as a shortcut since we'll never leave it, we do not have to trace what happens if either path leads to it.  "
},
{
  "id": "exercise-50",
  "level": "2",
  "url": "ch-fa-closure.html#exercise-50",
  "type": "Exercise",
  "number": "7.3.2",
  "title": "",
  "body": " Prove that the union of and results in a RL.    "
},
{
  "id": "exercise-51",
  "level": "2",
  "url": "ch-fa-closure.html#exercise-51",
  "type": "Exercise",
  "number": "7.3.3",
  "title": "",
  "body": " It is known that the language of all binary strings with an equal number of 0s and 1s is not regular. Prove that the language below is not regular using closure.   "
},
{
  "id": "exercise-52",
  "level": "2",
  "url": "ch-fa-closure.html#exercise-52",
  "type": "Exercise",
  "number": "7.3.4",
  "title": "",
  "body": " RLs are closed under intersection. Prove that the language of strings with any number of a's, b's, and c's and with an equal number of d's and e's is not regular. Use the closure fact above and that is not regular to prove this language is not regular.  "
},
{
  "id": "exercise-53",
  "level": "2",
  "url": "ch-fa-closure.html#exercise-53",
  "type": "Exercise",
  "number": "7.3.5",
  "title": "",
  "body": " RLs are closed under intersection, union, and a variety of other operations. In each of the following situations state whether is regular, irregular, or either. Take care to read each carefully as ordering changes.         is regular and is regular.        is regular and is irregular.        is regular and is regular.        is regular and is irregular.     "
},
{
  "id": "exercise-54",
  "level": "2",
  "url": "ch-fa-closure.html#exercise-54",
  "type": "Exercise",
  "number": "7.3.6",
  "title": "",
  "body": " Given is not regular. Given is . Use closure to explain what is known about and why.  "
},
{
  "id": "exercise-55",
  "level": "2",
  "url": "ch-fa-closure.html#exercise-55",
  "type": "Exercise",
  "number": "7.3.7",
  "title": "",
  "body": " Use closure and the givens to prove that the language, L, with , is not regular. Be thorough in your explanation.   You've been given the fact that the language, K, is not a regular language.   "
},
{
  "id": "ch-pumping-lemma-regular",
  "level": "1",
  "url": "ch-pumping-lemma-regular.html",
  "type": "Chapter",
  "number": "8",
  "title": "Pumping Lemma for Regular Languages",
  "body": " Pumping Lemma for Regular Languages  In this chapter you will learn:  Introduction to the Pumping Lemma for Regular Languages  Spotting Loops and Repetition in FAs  The Pumping Lemma for Regular Languages  Additional Non-Regular Languages for Proving     Introduciton to the Pumping Lemma for Regular Languages   Revisiting the Properties of DFAs  Consider below.    How many states are in this machine?   4. There are 4 states represented by circles.   Come up with some strings that exist in the languge of this machince. For the sake of example, we will use , , and .  Next, make a list of the states visited to parce throgh each of those strings. like this:   Parce Tables for 110101111011 in    States  A    A    A    B    C    B    C    D    B    C    B    C    D    String    1    1    0    1    0    1    1    1    1    0    1    1        Parce Tables for 01011 in    States  A    B    C    B    C    D    String    0    1    0    1    1        Parce Tables for 011 in    States  A    B    C    D    String    0    1    1       So, if our DFA has states, then any string with length at least will revisit some state that the DFA has been in before. This is an application of the Pigeon Hole Principle  Pigeon Hole Principle . A string with symbols needs states if it does not want to revisit a state.  Writing out these tables can make looping patterns more apparent. In , the transition among to and to could be repeated by a string. Another loop that can be repeated is to . Loops can be removed and still have a string in the language.  We can see this using the first string, . The repeating s at the beginning can be removed and the string is still in the languge, so the condensed string is The repeating s resulting from to transitions can also be taken out. This string is also in the language.  Try a couple more strings to identify patterns. Are there any similarly deduced strings that you can find?  Loops can be taken out, or they can be taken many times.   The Pigeon Hole Principle can be seen in all DFAs. And since it can be, we can build it into a mechanism to help us understand when languages are regular. That brings us to the Pumping Lemma.    Spotting Loops and Repetition in FAs  Consider where      Consider the following strings as given to .      States  A    B    C    String    0    1           States  A    B    C    C    C    String    0    1    1    1           States  A    B    C    C    C    C    C    C    C    String    0    1    0    0    1    0    0    1       After writing out these parce tables, it is clear to see that any combination of characters after an initial can be repeated without affecting if the string is accepted. This not only allows us to determine that but also helps us understand that any concatenation of characters , , , etc. can be reapeated any amount of times. Even number of times.    The Pumping Lemma for Regular Languages   Pumping Lemma for Regular Languages The Pumping Lemma for Regular Languages can be used to prove that languages are regular. It follows the general form outlined below.  If is regular, then it has a pumping length . Every string in of length at least will be pumpable.  Given this string, call it ( ). It has three parts:   A beginning that can be - call it     A pumpable part that cannot be - call it     An end that can be - call it    The key here is that we can make new strings in the language by removing or adding as many times as we'd like. Such as: , , , etc.  This works for any string that is long enough, and it happens within the first symbols of the input string.  In general, if the language of a machine is regular and the test string has length of at least p, then it is pumpable. This also means that there is some non-empty loop, but this will typically be written more formally and closer to:   If a language is a Regular Language then     such that with     Then where:           Take a languge we want to prove is not regular.    Assume it is regular.    Pick a string that is at least of length in the language    Show that every possible choice for cannot work    Thus the assumption is wrong and by contradition, the language is not regular.       Pumping Lemma for Regular Languages without a Machine  Say : has a number of 0s divisible by 3 and an even number of 1s.    is a Regular Language.   Let's say we don't know , just that it exists. Let's pick a string that's long.   This staisfies and     Some piece of in the first symbols is pumpable.   There is some that we can extract or insert as many times as we want        Pumping Lemma for Regular Languges with Defined Language  Consider .    Assume is regular thus obeying the Pumping Lemma for Regular Languages.    Let us choose since is a Regular Language, any string that is long enough should be pumpable.    A pumpable part ( ) must occur in the first symbols. So, must contain one or more 0s and no 1s since the first symbols are 0s.  If we pump down to , we will thus remove some 0s without removing any 1s. cannot possibly be in , no matter the choice for .    Thus the assumption is wrong and by contradiction, the language is not regular.       Additional Non-Regular Languages for Proving  Here are some additional, fun, non-regular languages to try to prove (in increasing complexity):                                Unless stated otherwise, . You can try or for additional practice.     Consider the machine below. What is the language of the machine? What are some state loops present within it?    Come up with some test strings and their parce paths. Are there any patterns of repetition?       States  A    B    C    String    0    1           States  A    B    C    A    B    C    String    0    1    0    0    1           States  A    B    C    A    B    C    C    C    C    String    0    1    0    0    1    1    1    1         A pattern of state repition is: to to .    Identify patterns of state repetition from a written language.    Some test strings inlcude:              Character repetitions can exist in these two places:        They can also be combined.    Prove is regular or not.      Prove is regular or not.      Prove is regular or not.      Prove the following language is regular.     Use the pumping lemma for regular languages to prove the following language is not regular.     The languages of brackets consists of all strings with nesting and matching parenthesis, brackets, and braces. Is this language regular or not? Prove it.    Sample strings include:   [(){}]    [[[()]]]{}{}{{}}    {}            Use the fact that regular languages are closed under intersection to prove that the language of any concatenation of English words, followed by #, followed by the exact same concatenation of English words is not regular. This language can be written as (w#w | w is any concatenation of English words)  You have been given that: is not regular.   Sample strings include:   thethe#thethe    same#same    atimeto#atimeto       According to Webster, the English langugae consists of approximately 470,000 words. Describe why (w#w | w is an English word) is a regular language.    Prove that the language with binary strings that have more 0s than 1s is not regular.    Prove that the language with strings with any number of a's, b's, and c's, but with an equal number of d's and e's is not regular.    Apply the pumping lemma for regular languages. Prove the language below is not regular.     Using the pumping lemma for regular languages, prove the language below is not regular.     Prove the following language, L, with is not regular using the pumping lemma for regular languages.   Some sample strings in the language are: , , , and      "
},
{
  "id": "objectives-8",
  "level": "2",
  "url": "ch-pumping-lemma-regular.html#objectives-8",
  "type": "Objectives",
  "number": "8",
  "title": "",
  "body": "In this chapter you will learn:  Introduction to the Pumping Lemma for Regular Languages  Spotting Loops and Repetition in FAs  The Pumping Lemma for Regular Languages  Additional Non-Regular Languages for Proving   "
},
{
  "id": "exploration-14",
  "level": "2",
  "url": "ch-pumping-lemma-regular.html#exploration-14",
  "type": "Exploration",
  "number": "14",
  "title": "Revisiting the Properties of DFAs.",
  "body": " Revisiting the Properties of DFAs  Consider below.    How many states are in this machine?   4. There are 4 states represented by circles.   Come up with some strings that exist in the languge of this machince. For the sake of example, we will use , , and .  Next, make a list of the states visited to parce throgh each of those strings. like this:   Parce Tables for 110101111011 in    States  A    A    A    B    C    B    C    D    B    C    B    C    D    String    1    1    0    1    0    1    1    1    1    0    1    1        Parce Tables for 01011 in    States  A    B    C    B    C    D    String    0    1    0    1    1        Parce Tables for 011 in    States  A    B    C    D    String    0    1    1       So, if our DFA has states, then any string with length at least will revisit some state that the DFA has been in before. This is an application of the Pigeon Hole Principle  Pigeon Hole Principle . A string with symbols needs states if it does not want to revisit a state.  Writing out these tables can make looping patterns more apparent. In , the transition among to and to could be repeated by a string. Another loop that can be repeated is to . Loops can be removed and still have a string in the language.  We can see this using the first string, . The repeating s at the beginning can be removed and the string is still in the languge, so the condensed string is The repeating s resulting from to transitions can also be taken out. This string is also in the language.  Try a couple more strings to identify patterns. Are there any similarly deduced strings that you can find?  Loops can be taken out, or they can be taken many times.  "
},
{
  "id": "p-269",
  "level": "2",
  "url": "ch-pumping-lemma-regular.html#p-269",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Pumping Lemma for Regular Languages "
},
{
  "id": "thm-plRL",
  "level": "2",
  "url": "ch-pumping-lemma-regular.html#thm-plRL",
  "type": "Theorem",
  "number": "8.4",
  "title": "",
  "body": "  Take a languge we want to prove is not regular.    Assume it is regular.    Pick a string that is at least of length in the language    Show that every possible choice for cannot work    Thus the assumption is wrong and by contradition, the language is not regular.     "
},
{
  "id": "exploration-15",
  "level": "2",
  "url": "ch-pumping-lemma-regular.html#exploration-15",
  "type": "Exploration",
  "number": "15",
  "title": "Pumping Lemma for Regular Languages without a Machine.",
  "body": " Pumping Lemma for Regular Languages without a Machine  Say : has a number of 0s divisible by 3 and an even number of 1s.    is a Regular Language.   Let's say we don't know , just that it exists. Let's pick a string that's long.   This staisfies and     Some piece of in the first symbols is pumpable.   There is some that we can extract or insert as many times as we want     "
},
{
  "id": "exploration-16",
  "level": "2",
  "url": "ch-pumping-lemma-regular.html#exploration-16",
  "type": "Exploration",
  "number": "16",
  "title": "Pumping Lemma for Regular Languges with Defined Language.",
  "body": " Pumping Lemma for Regular Languges with Defined Language  Consider .    Assume is regular thus obeying the Pumping Lemma for Regular Languages.    Let us choose since is a Regular Language, any string that is long enough should be pumpable.    A pumpable part ( ) must occur in the first symbols. So, must contain one or more 0s and no 1s since the first symbols are 0s.  If we pump down to , we will thus remove some 0s without removing any 1s. cannot possibly be in , no matter the choice for .    Thus the assumption is wrong and by contradiction, the language is not regular.    "
},
{
  "id": "exercise-56",
  "level": "2",
  "url": "ch-pumping-lemma-regular.html#exercise-56",
  "type": "Exercise",
  "number": "8.5.1",
  "title": "",
  "body": " Consider the machine below. What is the language of the machine? What are some state loops present within it?    Come up with some test strings and their parce paths. Are there any patterns of repetition?       States  A    B    C    String    0    1           States  A    B    C    A    B    C    String    0    1    0    0    1           States  A    B    C    A    B    C    C    C    C    String    0    1    0    0    1    1    1    1         A pattern of state repition is: to to .  "
},
{
  "id": "exercise-57",
  "level": "2",
  "url": "ch-pumping-lemma-regular.html#exercise-57",
  "type": "Exercise",
  "number": "8.5.2",
  "title": "",
  "body": " Identify patterns of state repetition from a written language.    Some test strings inlcude:              Character repetitions can exist in these two places:        They can also be combined.  "
},
{
  "id": "exercise-58",
  "level": "2",
  "url": "ch-pumping-lemma-regular.html#exercise-58",
  "type": "Exercise",
  "number": "8.5.3",
  "title": "",
  "body": " Prove is regular or not.    "
},
{
  "id": "exercise-59",
  "level": "2",
  "url": "ch-pumping-lemma-regular.html#exercise-59",
  "type": "Exercise",
  "number": "8.5.4",
  "title": "",
  "body": " Prove is regular or not.    "
},
{
  "id": "exercise-60",
  "level": "2",
  "url": "ch-pumping-lemma-regular.html#exercise-60",
  "type": "Exercise",
  "number": "8.5.5",
  "title": "",
  "body": " Prove is regular or not.    "
},
{
  "id": "exercise-61",
  "level": "2",
  "url": "ch-pumping-lemma-regular.html#exercise-61",
  "type": "Exercise",
  "number": "8.5.6",
  "title": "",
  "body": " Prove the following language is regular.   "
},
{
  "id": "exercise-62",
  "level": "2",
  "url": "ch-pumping-lemma-regular.html#exercise-62",
  "type": "Exercise",
  "number": "8.5.7",
  "title": "",
  "body": " Use the pumping lemma for regular languages to prove the following language is not regular.   "
},
{
  "id": "exercise-63",
  "level": "2",
  "url": "ch-pumping-lemma-regular.html#exercise-63",
  "type": "Exercise",
  "number": "8.5.8",
  "title": "",
  "body": " The languages of brackets consists of all strings with nesting and matching parenthesis, brackets, and braces. Is this language regular or not? Prove it.    Sample strings include:   [(){}]    [[[()]]]{}{}{{}}    {}          "
},
{
  "id": "exercise-64",
  "level": "2",
  "url": "ch-pumping-lemma-regular.html#exercise-64",
  "type": "Exercise",
  "number": "8.5.9",
  "title": "",
  "body": " Use the fact that regular languages are closed under intersection to prove that the language of any concatenation of English words, followed by #, followed by the exact same concatenation of English words is not regular. This language can be written as (w#w | w is any concatenation of English words)  You have been given that: is not regular.   Sample strings include:   thethe#thethe    same#same    atimeto#atimeto     "
},
{
  "id": "exercise-65",
  "level": "2",
  "url": "ch-pumping-lemma-regular.html#exercise-65",
  "type": "Exercise",
  "number": "8.5.10",
  "title": "",
  "body": " According to Webster, the English langugae consists of approximately 470,000 words. Describe why (w#w | w is an English word) is a regular language.  "
},
{
  "id": "exercise-66",
  "level": "2",
  "url": "ch-pumping-lemma-regular.html#exercise-66",
  "type": "Exercise",
  "number": "8.5.11",
  "title": "",
  "body": " Prove that the language with binary strings that have more 0s than 1s is not regular.  "
},
{
  "id": "exercise-67",
  "level": "2",
  "url": "ch-pumping-lemma-regular.html#exercise-67",
  "type": "Exercise",
  "number": "8.5.12",
  "title": "",
  "body": " Prove that the language with strings with any number of a's, b's, and c's, but with an equal number of d's and e's is not regular.  "
},
{
  "id": "exercise-68",
  "level": "2",
  "url": "ch-pumping-lemma-regular.html#exercise-68",
  "type": "Exercise",
  "number": "8.5.13",
  "title": "",
  "body": " Apply the pumping lemma for regular languages. Prove the language below is not regular.   "
},
{
  "id": "exercise-69",
  "level": "2",
  "url": "ch-pumping-lemma-regular.html#exercise-69",
  "type": "Exercise",
  "number": "8.5.14",
  "title": "",
  "body": " Using the pumping lemma for regular languages, prove the language below is not regular.   "
},
{
  "id": "exercise-70",
  "level": "2",
  "url": "ch-pumping-lemma-regular.html#exercise-70",
  "type": "Exercise",
  "number": "8.5.15",
  "title": "",
  "body": " Prove the following language, L, with is not regular using the pumping lemma for regular languages.   Some sample strings in the language are: , , , and   "
},
{
  "id": "ch-cfgs",
  "level": "1",
  "url": "ch-cfgs.html",
  "type": "Chapter",
  "number": "9",
  "title": "Context Free Grammars (CFGs)",
  "body": " Context Free Grammars (CFGs)  In this chapter you will learn:  Context Free Grammars  Terminals  Parse Trees  Ambiguous and Inherently Ambiguous     Context Free Grammars (CFGs)   Regular Languages Review  To best understand CFGs, we must understand how they differ from Regular Languages. Regular Languages:   have no memory - they use states    have modular looping - they use state transitions    can be expressed in Regular Expressions, Deterministic Finite Automata, and Non-Deterministic Finite Automata   In order to build upon Regular Languages, we move to constructions that allow some limited forms of matching. Context Free Languages come about when Regular Languages have access to stack memory, and they are expressed through Context Free Grammars.    Basics of Context Free Grammars   Context Free Grammars (CFGs)  Context Free Grammars (CFGs) consist of a series of rules or productions.                 Each line of a CFG is called a Rule  rule . The left hand side of a rule is always a Variable (in CFGs)  variable . Variables are denoted by uppercase letters. The right hand side of a rule is some combination terminals and variables. Terminal  Terminals can be elements of the alphabet of the Context Free Language or the empty string ( ). They are denoted by lower case letters.  CFGs have a start variable, it is usually on the left hand side of the first rule and is denoted with . To produce strings, variables are replaced by one of the options avaliable on the production's right hand side. In a production rule, is used to mean OR. The left hand side can be replaced by one of the right hand side.  Here is a sample derivation from :   is replaced by    The in is relapced with    The in is replaced with    in is replaced by   This makes the final string: .   Consider the following grammar:   :      What strings can we make from it?   :    is replaced by       :    is replaced by    is replaced by    :    is replaced by    is replaced by    is replaced by   And many more strings can be made! But, what languge is this?  The language of this grammar is any amount of s concatenated.    Consider the following grammar:   :      What strings can we make from it?    :    is replaced by       :    is replaced by    is replaced by    :    is replaced by    is replaced by    is replaced by    And many more strings can be made! But, what languge is this?  The language of this grammar is any amount of 0s followed by the same amount of 1s.    Let us consider a grammar with multiple variables.   :           Can we generate only s?   is replaced by    is replaced by    is replaced by   The resulting string is . Therefore, can generate only s.  Can we generate only s? How?    is replaced by    is replaced by    is replaced by    is replaced by    The resulting string is . Therefore, can generate only s.  What are some other strings that we can generate using ?                 The language of this grammar is the empty string or any amount of s followed by any amount of s.    Creating CFGs from Regular Expressions  Any Regular Expression is a Context Free Language and can easily be implemented into a CFG using the bellow framework:   union is an , another rule    concatenation is a rule    * is a rule   Let us look a little ddeper into matching with another exploration.   Construct a CFG for where Before looking at the correct grammar, let's first analyze some common incorrect answers. below demonstrates one common mistake:   :            But, why is incorrect? Construct some strings using this grammar.   abc    aabcbc    aabcbc    aaaaaaa   But, how did the string come about from ?   is replaced by    The is replaced by    The is replaced by    The is replaced by    The is replaced by    The is replaced by    The is replaced by   By not forcing the and to be created at the same time and inculding an epsilon, then it is possible to a string to be created that is not in the language.  Below is the correct grammar for .     :        We can see that matched pairs must be contained in the same rule.   Following our thinking from the exploration, we can see that interleaved matching does not work within Context Free Grammars. An example is this would be a a language where Matching three groupings also does not work. An example of this would be:    Here is an example that is applicable to more general computer science. Imagine parsing a computer program. You have run a REX which returns these terminals:   b boolean expressions    i an keyword    c a code statement    e an keyword    f an keyword    : a colon   Write the CFG using , , , , , and for Python statements. You may ignore returns and tabbing.     :                    The CDFG can also be written as seen below.     :                     Parse Trees  Derivations are often drawn as a tree so that precedence and matching is clean. We will consider for this example.              We list the string at the bottom of the tree with the starting variable at the top. For the first example we will follow the derrivation that creates . It is repeated below and has been numbers for convinence:   1)  2)    is replaced by  The in is relapced with              3)  4)    The in is replaced with  in is replaced by               Here, you can see the and matching and the and matching a little more clearly.    Let's work through another example from :          We will create the parse tree for the string .     First, we will need to give us        Second, we will need to give us        Third, we will need to give us        Finally, we will need to give us         But, there is another way to arrive at this string using . Try drawing the parse tree for it.            Ambiguity   Ambiguous  Abmibuous grammars can generate some string in two or more different ways. The grammar as shown in the exploration above is ambiguous as there is more than one way to generate the string, but the language this grammar represents does have a grammar that is not ambiguous.  If we want to force some matching to have precedence, you simply push the items with higher precedence to be matched by rules further down the grammar. Consider once again.        Here, is of lower precedence than , so it can be moved down.           The also has lower precedence than and , but there needs to be a way to generate those. They can also be given their own variable.              Using the above grammar, there is now only one way to create the string . This is the parse tree:  This is the only possible way to create the parse tree that generates from because the \"+\" must be matched first.  Some languages have only ambiguous grammars. These languages are called Inherently Ambiguous interherently ambiguous . The language below is an example of an inherently ambiguous language:  is one possible grammar for :                   Try to make a parse tree for the string as generated by . Below are some examples.           Write a CFG for    Consider the OR first. Then consider how to generate the reptition. There are multiple options for a grammar of this language.           OR        OR              Are all grammars that can represent .    Write a CFG for               OR           OR           Both grammars can represent .    Write a CFG for    Lean on past exercises.               Create a CFG for the language below: (Palindromes are strings that the same no matter if read backwards for forwards. is an example.)               Write the language of matching open and closed brackets such as: (),[], and {}.   Remember to consider that [(){}] can also take place.        Give a DPA and a CFG for the language of boolean expressions. Terminals, will be:   v  a varaible or value in the programming sense    e  a comparison like     b  boolean operators like and     t  represents true or false      Sample strings in this language include:   vev    vevbvebvev    t    vevbtbvetbtet       Consider: It is known that is not a context free language. is a CFL and a RL. Since RLs are closed under intersection, intersected with must not be a RL.  Find the error in the proof above and describe it clearly.    Translate the below CFG into English:                  Give a CFG for the language:  consists of in reverse. So, if , then . Thus is a string in this language.    Given the grammar below, show the parse tree for the string:                   Translate the grammar below into English:  CFG:      Create a CFG from the English description of the language below:      Given the grammar below, show the parse tree for the string:   CFG:         Translate the below CFG into English:               Given that same grammar, show a parse tree for the string:        The language consists of all strings with either:   an equal number of a's and b's with no c's, or    an equal number of a's and c's with no b's     Where,       Translate the below CFG into English:               Also generate a parse tree, using the grammar above, for the string: aabbab      The set of all strings that have an equal number of a's and d's, less b's than c's, and the symbols appear in alphabetical order.      Translate the below CFG into English:                  Also generate a parse tree, using the grammar above, for the string: aabbab      Give a CFG that consists of strings taht either a list of a's followed by b's in equal number or a list of b's followed by c's in equal number or a list of c's followed by d's in equal number. the alphabet of this langage is:    Some accepted strings: , , , and .  Some regjected strings: , , , and .     "
},
{
  "id": "objectives-9",
  "level": "2",
  "url": "ch-cfgs.html#objectives-9",
  "type": "Objectives",
  "number": "9",
  "title": "",
  "body": "In this chapter you will learn:  Context Free Grammars  Terminals  Parse Trees  Ambiguous and Inherently Ambiguous   "
},
{
  "id": "p-331",
  "level": "2",
  "url": "ch-cfgs.html#p-331",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Context Free Grammars (CFGs) "
},
{
  "id": "p-332",
  "level": "2",
  "url": "ch-cfgs.html#p-332",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rule variable Terminals "
},
{
  "id": "exploration-17",
  "level": "2",
  "url": "ch-cfgs.html#exploration-17",
  "type": "Exploration",
  "number": "1",
  "title": "",
  "body": " Consider the following grammar:   :      What strings can we make from it?   :    is replaced by       :    is replaced by    is replaced by    :    is replaced by    is replaced by    is replaced by   And many more strings can be made! But, what languge is this?  The language of this grammar is any amount of s concatenated.  "
},
{
  "id": "exploration-18",
  "level": "2",
  "url": "ch-cfgs.html#exploration-18",
  "type": "Exploration",
  "number": "2",
  "title": "",
  "body": " Consider the following grammar:   :      What strings can we make from it?    :    is replaced by       :    is replaced by    is replaced by    :    is replaced by    is replaced by    is replaced by    And many more strings can be made! But, what languge is this?  The language of this grammar is any amount of 0s followed by the same amount of 1s.  "
},
{
  "id": "exploration-19",
  "level": "2",
  "url": "ch-cfgs.html#exploration-19",
  "type": "Exploration",
  "number": "3",
  "title": "",
  "body": " Let us consider a grammar with multiple variables.   :           Can we generate only s?   is replaced by    is replaced by    is replaced by   The resulting string is . Therefore, can generate only s.  Can we generate only s? How?    is replaced by    is replaced by    is replaced by    is replaced by    The resulting string is . Therefore, can generate only s.  What are some other strings that we can generate using ?                 The language of this grammar is the empty string or any amount of s followed by any amount of s.  "
},
{
  "id": "exploration-20",
  "level": "2",
  "url": "ch-cfgs.html#exploration-20",
  "type": "Exploration",
  "number": "4",
  "title": "",
  "body": " Construct a CFG for where Before looking at the correct grammar, let's first analyze some common incorrect answers. below demonstrates one common mistake:   :            But, why is incorrect? Construct some strings using this grammar.   abc    aabcbc    aabcbc    aaaaaaa   But, how did the string come about from ?   is replaced by    The is replaced by    The is replaced by    The is replaced by    The is replaced by    The is replaced by    The is replaced by   By not forcing the and to be created at the same time and inculding an epsilon, then it is possible to a string to be created that is not in the language.  Below is the correct grammar for .     :        We can see that matched pairs must be contained in the same rule.  "
},
{
  "id": "example-1",
  "level": "2",
  "url": "ch-cfgs.html#example-1",
  "type": "Example",
  "number": "9.1",
  "title": "",
  "body": " Here is an example that is applicable to more general computer science. Imagine parsing a computer program. You have run a REX which returns these terminals:   b boolean expressions    i an keyword    c a code statement    e an keyword    f an keyword    : a colon   Write the CFG using , , , , , and for Python statements. You may ignore returns and tabbing.     :                    The CDFG can also be written as seen below.     :                 "
},
{
  "id": "exp-AmbIntro",
  "level": "2",
  "url": "ch-cfgs.html#exp-AmbIntro",
  "type": "Exploration",
  "number": "5",
  "title": "",
  "body": "  Let's work through another example from :          We will create the parse tree for the string .     First, we will need to give us        Second, we will need to give us        Third, we will need to give us        Finally, we will need to give us         But, there is another way to arrive at this string using . Try drawing the parse tree for it.         "
},
{
  "id": "p-367",
  "level": "2",
  "url": "ch-cfgs.html#p-367",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Abmibuous "
},
{
  "id": "p-369",
  "level": "2",
  "url": "ch-cfgs.html#p-369",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "interherently ambiguous "
},
{
  "id": "exercise-71",
  "level": "2",
  "url": "ch-cfgs.html#exercise-71",
  "type": "Exercise",
  "number": "9.4.1",
  "title": "",
  "body": " Write a CFG for    Consider the OR first. Then consider how to generate the reptition. There are multiple options for a grammar of this language.           OR        OR              Are all grammars that can represent .  "
},
{
  "id": "exercise-72",
  "level": "2",
  "url": "ch-cfgs.html#exercise-72",
  "type": "Exercise",
  "number": "9.4.2",
  "title": "",
  "body": " Write a CFG for               OR           OR           Both grammars can represent .  "
},
{
  "id": "exercise-73",
  "level": "2",
  "url": "ch-cfgs.html#exercise-73",
  "type": "Exercise",
  "number": "9.4.3",
  "title": "",
  "body": " Write a CFG for    Lean on past exercises.             "
},
{
  "id": "exercise-74",
  "level": "2",
  "url": "ch-cfgs.html#exercise-74",
  "type": "Exercise",
  "number": "9.4.4",
  "title": "",
  "body": " Create a CFG for the language below: (Palindromes are strings that the same no matter if read backwards for forwards. is an example.)             "
},
{
  "id": "exercise-75",
  "level": "2",
  "url": "ch-cfgs.html#exercise-75",
  "type": "Exercise",
  "number": "9.4.5",
  "title": "",
  "body": " Write the language of matching open and closed brackets such as: (),[], and {}.   Remember to consider that [(){}] can also take place.      "
},
{
  "id": "exercise-76",
  "level": "2",
  "url": "ch-cfgs.html#exercise-76",
  "type": "Exercise",
  "number": "9.4.6",
  "title": "",
  "body": " Give a DPA and a CFG for the language of boolean expressions. Terminals, will be:   v  a varaible or value in the programming sense    e  a comparison like     b  boolean operators like and     t  represents true or false      Sample strings in this language include:   vev    vevbvebvev    t    vevbtbvetbtet     "
},
{
  "id": "exercise-77",
  "level": "2",
  "url": "ch-cfgs.html#exercise-77",
  "type": "Exercise",
  "number": "9.4.7",
  "title": "",
  "body": " Consider: It is known that is not a context free language. is a CFL and a RL. Since RLs are closed under intersection, intersected with must not be a RL.  Find the error in the proof above and describe it clearly.  "
},
{
  "id": "exercise-78",
  "level": "2",
  "url": "ch-cfgs.html#exercise-78",
  "type": "Exercise",
  "number": "9.4.8",
  "title": "",
  "body": " Translate the below CFG into English:                "
},
{
  "id": "exercise-79",
  "level": "2",
  "url": "ch-cfgs.html#exercise-79",
  "type": "Exercise",
  "number": "9.4.9",
  "title": "",
  "body": " Give a CFG for the language:  consists of in reverse. So, if , then . Thus is a string in this language.  "
},
{
  "id": "exercise-80",
  "level": "2",
  "url": "ch-cfgs.html#exercise-80",
  "type": "Exercise",
  "number": "9.4.10",
  "title": "",
  "body": " Given the grammar below, show the parse tree for the string:                 "
},
{
  "id": "exercise-81",
  "level": "2",
  "url": "ch-cfgs.html#exercise-81",
  "type": "Exercise",
  "number": "9.4.11",
  "title": "",
  "body": " Translate the grammar below into English:  CFG:    "
},
{
  "id": "exercise-82",
  "level": "2",
  "url": "ch-cfgs.html#exercise-82",
  "type": "Exercise",
  "number": "9.4.12",
  "title": "",
  "body": " Create a CFG from the English description of the language below:    "
},
{
  "id": "exercise-83",
  "level": "2",
  "url": "ch-cfgs.html#exercise-83",
  "type": "Exercise",
  "number": "9.4.13",
  "title": "",
  "body": " Given the grammar below, show the parse tree for the string:   CFG:    "
},
{
  "id": "exercise-84",
  "level": "2",
  "url": "ch-cfgs.html#exercise-84",
  "type": "Exercise",
  "number": "9.4.14",
  "title": "",
  "body": "    Translate the below CFG into English:               Given that same grammar, show a parse tree for the string:      "
},
{
  "id": "exercise-85",
  "level": "2",
  "url": "ch-cfgs.html#exercise-85",
  "type": "Exercise",
  "number": "9.4.15",
  "title": "",
  "body": " The language consists of all strings with either:   an equal number of a's and b's with no c's, or    an equal number of a's and c's with no b's     Where,   "
},
{
  "id": "exercise-86",
  "level": "2",
  "url": "ch-cfgs.html#exercise-86",
  "type": "Exercise",
  "number": "9.4.16",
  "title": "",
  "body": "   Translate the below CFG into English:               Also generate a parse tree, using the grammar above, for the string: aabbab    "
},
{
  "id": "exercise-87",
  "level": "2",
  "url": "ch-cfgs.html#exercise-87",
  "type": "Exercise",
  "number": "9.4.17",
  "title": "",
  "body": " The set of all strings that have an equal number of a's and d's, less b's than c's, and the symbols appear in alphabetical order.  "
},
{
  "id": "exercise-88",
  "level": "2",
  "url": "ch-cfgs.html#exercise-88",
  "type": "Exercise",
  "number": "9.4.18",
  "title": "",
  "body": "   Translate the below CFG into English:                  Also generate a parse tree, using the grammar above, for the string: aabbab    "
},
{
  "id": "exercise-89",
  "level": "2",
  "url": "ch-cfgs.html#exercise-89",
  "type": "Exercise",
  "number": "9.4.19",
  "title": "",
  "body": " Give a CFG that consists of strings taht either a list of a's followed by b's in equal number or a list of b's followed by c's in equal number or a list of c's followed by d's in equal number. the alphabet of this langage is:    Some accepted strings: , , , and .  Some regjected strings: , , , and .  "
},
{
  "id": "ch-pdas",
  "level": "1",
  "url": "ch-pdas.html",
  "type": "Chapter",
  "number": "10",
  "title": "Pushdown Automata",
  "body": " Pushdown Automata  In this chapter you will learn:  Introduction to Pushdown Automatas     Introduction to Pushdown Automatas   Pushdown Automata (PDA) The machines associated with CFLs are called Pushdown Automata (PDAs) . They have memory in the form of an infinite stack.  Pushing is adding a term to the stack while popping is removing a term from the stack. We use to indicate the end of input or the result of popping from an empty stack.  To create PDA diagrams, we will lean on skills learned when drawing state machines. Instead of transitioning on a single character or a single character in a list, we will be introducing a notion that details what needs to read, what needs to be popped, and what needs to be pushed.   0 0       read pop push   We will further explore this notation in the exploration below.   We will walk through how to create a PDA from a CFL. Consider where The idea here is to push s onto the stack until there are no more s. We will then pop one off of the stack for each we read.  Let's consider this line of thinking in terms of steps and putting those steps into the read-pop-push notation from above.    - Read 0s, do not pop anything from stack, push a 0 to the stack     - Read first 1, pop top 0 off of stack, do not push anything onto stack     - Read rest of the 1s, pop top 0 off of stack, do not push anything onto stack     - Read in a , pop that off of stack, do not push anything onto stack   We can then put these steps into a state diagram.      Now, try to create your own PDA for the following language: It is easiest to first write out the necessary steps and then draw the PDA diagram.  Here are the necessary steps:    - Read s, do not pop anything from stack, push a to the stack     - Read first , do not pop anything from stack, do not push anything onto stack     - Read first , pop first from stack, do not push anything onto stack     - Read in a , pop that off of stack, do not push anything onto stack   It is important to note that we must loop through checking for both the and .          Create a PDA for the langugage below:    PDAs can consider multiple transitions at once. This allows for varriation.       Create a PDA based on a language that includes any number of s followed by a number of s such that there is at least one more 1 than 0s.       Create a PDA using the alphabet below for the language with any strings with the form:      Translate the below PDA into English:      Craft a PDA using the alphabet, , for the language with any strings with the form:  The language consists of all strings with either:   an equal number of a's and b's with no c's, or    an equal number of a's and c's with no b's       Translate the below PDA into English:      Craft a PDA using the alphabet, , for the languae with any strings with the form:  The language consists of all strings with a's followed by b's where either there are more a's than b's or more b's than a's, but never the same amount.    Translate the below PDA into English:      Craft a PDA using the alphabet, below for the language with any strings with the form:  The set of all strings that have an equal number of a's and d's, less b's than c's, and the symbols appear in alphabetical order.    Translante the PDA below into an English description. It has the alphabet,        "
},
{
  "id": "objectives-10",
  "level": "2",
  "url": "ch-pdas.html#objectives-10",
  "type": "Objectives",
  "number": "10",
  "title": "",
  "body": "In this chapter you will learn:  Introduction to Pushdown Automatas   "
},
{
  "id": "p-418",
  "level": "2",
  "url": "ch-pdas.html#p-418",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Pushdown Automata (PDAs) "
},
{
  "id": "exploration-22",
  "level": "2",
  "url": "ch-pdas.html#exploration-22",
  "type": "Exploration",
  "number": "6",
  "title": "",
  "body": " We will walk through how to create a PDA from a CFL. Consider where The idea here is to push s onto the stack until there are no more s. We will then pop one off of the stack for each we read.  Let's consider this line of thinking in terms of steps and putting those steps into the read-pop-push notation from above.    - Read 0s, do not pop anything from stack, push a 0 to the stack     - Read first 1, pop top 0 off of stack, do not push anything onto stack     - Read rest of the 1s, pop top 0 off of stack, do not push anything onto stack     - Read in a , pop that off of stack, do not push anything onto stack   We can then put these steps into a state diagram.    "
},
{
  "id": "exploration-23",
  "level": "2",
  "url": "ch-pdas.html#exploration-23",
  "type": "Exploration",
  "number": "7",
  "title": "",
  "body": " Now, try to create your own PDA for the following language: It is easiest to first write out the necessary steps and then draw the PDA diagram.  Here are the necessary steps:    - Read s, do not pop anything from stack, push a to the stack     - Read first , do not pop anything from stack, do not push anything onto stack     - Read first , pop first from stack, do not push anything onto stack     - Read in a , pop that off of stack, do not push anything onto stack   It is important to note that we must loop through checking for both the and .      "
},
{
  "id": "exercise-90",
  "level": "2",
  "url": "ch-pdas.html#exercise-90",
  "type": "Exercise",
  "number": "10.2.1",
  "title": "",
  "body": " Create a PDA for the langugage below:    PDAs can consider multiple transitions at once. This allows for varriation.     "
},
{
  "id": "exercise-91",
  "level": "2",
  "url": "ch-pdas.html#exercise-91",
  "type": "Exercise",
  "number": "10.2.2",
  "title": "",
  "body": " Create a PDA based on a language that includes any number of s followed by a number of s such that there is at least one more 1 than 0s.     "
},
{
  "id": "exercise-92",
  "level": "2",
  "url": "ch-pdas.html#exercise-92",
  "type": "Exercise",
  "number": "10.2.3",
  "title": "",
  "body": " Create a PDA using the alphabet below for the language with any strings with the form:    "
},
{
  "id": "exercise-93",
  "level": "2",
  "url": "ch-pdas.html#exercise-93",
  "type": "Exercise",
  "number": "10.2.4",
  "title": "",
  "body": " Translate the below PDA into English:    "
},
{
  "id": "exercise-94",
  "level": "2",
  "url": "ch-pdas.html#exercise-94",
  "type": "Exercise",
  "number": "10.2.5",
  "title": "",
  "body": " Craft a PDA using the alphabet, , for the language with any strings with the form:  The language consists of all strings with either:   an equal number of a's and b's with no c's, or    an equal number of a's and c's with no b's     "
},
{
  "id": "exercise-95",
  "level": "2",
  "url": "ch-pdas.html#exercise-95",
  "type": "Exercise",
  "number": "10.2.6",
  "title": "",
  "body": " Translate the below PDA into English:    "
},
{
  "id": "exercise-96",
  "level": "2",
  "url": "ch-pdas.html#exercise-96",
  "type": "Exercise",
  "number": "10.2.7",
  "title": "",
  "body": " Craft a PDA using the alphabet, , for the languae with any strings with the form:  The language consists of all strings with a's followed by b's where either there are more a's than b's or more b's than a's, but never the same amount.  "
},
{
  "id": "exercise-97",
  "level": "2",
  "url": "ch-pdas.html#exercise-97",
  "type": "Exercise",
  "number": "10.2.8",
  "title": "",
  "body": " Translate the below PDA into English:    "
},
{
  "id": "exercise-98",
  "level": "2",
  "url": "ch-pdas.html#exercise-98",
  "type": "Exercise",
  "number": "10.2.9",
  "title": "",
  "body": " Craft a PDA using the alphabet, below for the language with any strings with the form:  The set of all strings that have an equal number of a's and d's, less b's than c's, and the symbols appear in alphabetical order.  "
},
{
  "id": "exercise-99",
  "level": "2",
  "url": "ch-pdas.html#exercise-99",
  "type": "Exercise",
  "number": "10.2.10",
  "title": "",
  "body": " Translante the PDA below into an English description. It has the alphabet,     "
},
{
  "id": "ch-cnf",
  "level": "1",
  "url": "ch-cnf.html",
  "type": "Chapter",
  "number": "11",
  "title": "Chomsky Normal Form",
  "body": " Chomsky Normal Form  In this chapter you will learn:  Introduction to Chompsky's Normal Form  Chompsky Normal Form  Rules of Chompsky Normal Form  Steps to Putting a CFG in CNF     Introduction to Normal Forms  Different forms of Context Free Grammars can be useful in different situations. Noam Chompsky invented one such form to force derivations to have a certain length. It is easy to see how that might be useful in computaitons.   To better understand this topic, let's explore the possibilites associated with CFGs. Consider below:          What different ways are there to produce the string \"a\" from ?   Here are two ways to make \"a\".           But, it is also possible for to produce: So, when would a construction like this quit? Could it produce simply an ?  As humans, we can look at this simply example and give answers. This gets more complicated when considering more complex grammars and especially automation.     Chompsky Normal Form   Chompsky Normal Form (CNF)  Chompsky Normal Form (CNF) is one normal form that can be used to make answering some of the above questions less complicated.   Consider the CFG below. It is in Chompsky Normal Form.                Considering , how many steps are there to produce \"a\"?   1.    How many steps are there to produce \"aa\"?   3. OR      Rules of Chompsky Normal Form  These are the rules of CNF:   Only the start state has     The start state is never on the right hand side of any production    All rules either replace a variable with two variables or replace a variable with a terminal   Because of CNF's structure, we can quickly answer some questions related to a grammar while avoiding some pitfalls that can occur in automoation.    Steps to Putting a CFG in CNF  All CFGs can be put into CNF. The steps to do so are outlined below.   Add a new start state that is a clone of the old one. This new start state is typically called , while the original start state remains .    Remove an transition by simulating it. If there are more empty string transitions, repeat this step until no more remain or only the new start state has an empty string rule.    Look for Unit Rule  unit rules and replace them by cloning. A unit rule is when a variable goes to the same variable.    Look for rules with terminals that are not alone. Make new rules for those teminals.    Look for rules with more than two variables. Make new rules to turn them into two seperate rules.   When you complete this process, every rule will have only two variables on the right hand side or a terminal by itself. The only exception here is the new start state which can have an empty string transition.   Let's work an example of putting a CFG into CNF. Consider below.             The first step is to make a new start state and clone the old one.                The second step is to simulate to remove the empty string transition.                But, now the empty string transition in the original start state must be removed by simulation.                Next, we need to clone the unit rules. These are and                  and now need terminal rules                            Finally, we need to take care of any rules with a length greater than 2. This is and                                        Convert the grammar below into CNF. Show your steps.  CFG:      While showing your steps, convert this grammar into CNF:               While showing your steps and with the alpahbet, , convert this grammar into CNF:                  While showing your steps and with the alpahbet, , convert this grammar into CNF:               While showing your steps and with the alphabet, , convert the CFG below into CNF.                   "
},
{
  "id": "objectives-11",
  "level": "2",
  "url": "ch-cnf.html#objectives-11",
  "type": "Objectives",
  "number": "11",
  "title": "",
  "body": "In this chapter you will learn:  Introduction to Chompsky's Normal Form  Chompsky Normal Form  Rules of Chompsky Normal Form  Steps to Putting a CFG in CNF   "
},
{
  "id": "exploration-24",
  "level": "2",
  "url": "ch-cnf.html#exploration-24",
  "type": "Exploration",
  "number": "8",
  "title": "",
  "body": " To better understand this topic, let's explore the possibilites associated with CFGs. Consider below:          What different ways are there to produce the string \"a\" from ?   Here are two ways to make \"a\".           But, it is also possible for to produce: So, when would a construction like this quit? Could it produce simply an ?  As humans, we can look at this simply example and give answers. This gets more complicated when considering more complex grammars and especially automation.  "
},
{
  "id": "p-455",
  "level": "2",
  "url": "ch-cnf.html#p-455",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Chompsky Normal Form (CNF) "
},
{
  "id": "exploration-25",
  "level": "2",
  "url": "ch-cnf.html#exploration-25",
  "type": "Exploration",
  "number": "9",
  "title": "",
  "body": " Consider the CFG below. It is in Chompsky Normal Form.                Considering , how many steps are there to produce \"a\"?   1.    How many steps are there to produce \"aa\"?   3. OR    "
},
{
  "id": "p-465",
  "level": "2",
  "url": "ch-cnf.html#p-465",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unit rules "
},
{
  "id": "exploration-26",
  "level": "2",
  "url": "ch-cnf.html#exploration-26",
  "type": "Exploration",
  "number": "10",
  "title": "",
  "body": " Let's work an example of putting a CFG into CNF. Consider below.             The first step is to make a new start state and clone the old one.                The second step is to simulate to remove the empty string transition.                But, now the empty string transition in the original start state must be removed by simulation.                Next, we need to clone the unit rules. These are and                  and now need terminal rules                            Finally, we need to take care of any rules with a length greater than 2. This is and                                   "
},
{
  "id": "exercise-100",
  "level": "2",
  "url": "ch-cnf.html#exercise-100",
  "type": "Exercise",
  "number": "11.3.1",
  "title": "",
  "body": " Convert the grammar below into CNF. Show your steps.  CFG:    "
},
{
  "id": "exercise-101",
  "level": "2",
  "url": "ch-cnf.html#exercise-101",
  "type": "Exercise",
  "number": "11.3.2",
  "title": "",
  "body": " While showing your steps, convert this grammar into CNF:             "
},
{
  "id": "exercise-102",
  "level": "2",
  "url": "ch-cnf.html#exercise-102",
  "type": "Exercise",
  "number": "11.3.3",
  "title": "",
  "body": " While showing your steps and with the alpahbet, , convert this grammar into CNF:                "
},
{
  "id": "exercise-103",
  "level": "2",
  "url": "ch-cnf.html#exercise-103",
  "type": "Exercise",
  "number": "11.3.4",
  "title": "",
  "body": " While showing your steps and with the alpahbet, , convert this grammar into CNF:             "
},
{
  "id": "exercise-104",
  "level": "2",
  "url": "ch-cnf.html#exercise-104",
  "type": "Exercise",
  "number": "11.3.5",
  "title": "",
  "body": " While showing your steps and with the alphabet, , convert the CFG below into CNF.                "
},
{
  "id": "ch-cnl",
  "level": "1",
  "url": "ch-cnl.html",
  "type": "Chapter",
  "number": "12",
  "title": "Context Free Languages",
  "body": " Context Free Languages  In this chapter you will learn:  Introduction to Context Free Languages     Introduction to Context Free Languages   Context Free Languages (CFLs)  Context Free Languages (CFLs) are good at unbounded inner to outer matching with some concatenation. CFLs and PDAs have the ability to recognize the same class of languages. is all languages.       RLs can be expressed using Regular Expressions and Finite Automatas. They can be proven to be regular using the Pumping Lemma for Regular Languages.    Both RLs and CFLs can be espressed by CFGs and PDAs. They can be proven using the Pumping Lemma for CFLs.    CFLs that are not RLs, might not obey the Pumping Lemma for Regular Languages, might be able to use closure properties of RLs to prove it is not regular, and must have some sort of unbounded matching.      Let's look at an example of trying to classify a language as a RL, CFL, or neither. Consider the language below: First, write a PDA for the language. Can we do it?   Yes we can!     Second, write a CFG that recognizes . Can we do it?   Yes we can!           So, is a RL, CFL, or both?   Since can be expressed as both a PDA and a CFG, it is both a RL and a CFL.     What language does this PDA recognize?     The language is any string with the same number of 0s and 1s.       CFLs are not closed under intersection. Provide a counter example that proves this.    Give an English description of the following CFL.                "
},
{
  "id": "objectives-12",
  "level": "2",
  "url": "ch-cnl.html#objectives-12",
  "type": "Objectives",
  "number": "12",
  "title": "",
  "body": "In this chapter you will learn:  Introduction to Context Free Languages   "
},
{
  "id": "p-484",
  "level": "2",
  "url": "ch-cnl.html#p-484",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Context Free Languages (CFLs) "
},
{
  "id": "exploration-27",
  "level": "2",
  "url": "ch-cnl.html#exploration-27",
  "type": "Exploration",
  "number": "11",
  "title": "",
  "body": " Let's look at an example of trying to classify a language as a RL, CFL, or neither. Consider the language below: First, write a PDA for the language. Can we do it?   Yes we can!     Second, write a CFG that recognizes . Can we do it?   Yes we can!           So, is a RL, CFL, or both?   Since can be expressed as both a PDA and a CFG, it is both a RL and a CFL.   "
},
{
  "id": "exploration-28",
  "level": "2",
  "url": "ch-cnl.html#exploration-28",
  "type": "Exploration",
  "number": "12",
  "title": "",
  "body": " What language does this PDA recognize?     The language is any string with the same number of 0s and 1s.   "
},
{
  "id": "exercise-105",
  "level": "2",
  "url": "ch-cnl.html#exercise-105",
  "type": "Exercise",
  "number": "12.2.1",
  "title": "",
  "body": " CFLs are not closed under intersection. Provide a counter example that proves this.  "
},
{
  "id": "exercise-106",
  "level": "2",
  "url": "ch-cnl.html#exercise-106",
  "type": "Exercise",
  "number": "12.2.2",
  "title": "",
  "body": " Give an English description of the following CFL.             "
},
{
  "id": "ch-pumping-lemma-context-free",
  "level": "1",
  "url": "ch-pumping-lemma-context-free.html",
  "type": "Chapter",
  "number": "13",
  "title": "Pumping Lemma for Context Free Languages",
  "body": " Pumping Lemma for Context Free Languages  In this chapter you will learn:  Revisiting Parse Trees and Spotting Loops  The Pumping Lemma for Context Free Languages     Revisiting Parse Trees and Spotting Loops  In order to understand the Pumping Lemma for Context Free Languages, we need to take a step back and look at some parse trees.   Consider this CFL below:        Try creating the parse tree for producing the string from this grammar.      That string was able to be generated by a relatively simple parse tree, but the grammar is not in CNF. Try putting the grammar in CNF.                        Considering the grammar in CNF, re-make the parse tree that would produce the string .      Can you see how the same inner and exists in both parse trees? If that is removed from the middle of the trees, then an loop remains. This loop works from . This loop can be removed, or it can be taken as many times as we like.  Here is an example of a string whose loop has been removed:    Here is an example of a string whose loop has been taken many times:    As it is a loop, the loop can be taken an infinite amount of times.     The Pumping Lemma for Context Free Languages  The Pumping Lemma for Context Free Languages can be used to prove that a language is not context free. These are the conditions of the Pumping Lemma for Context Free Languages:                 And the most general proof outline follows below:   Assume the language is a CFL    Pick a string     Try to pump all possible loops and show that none work (stay in the language)    State that the assumption was wrong and is not a CFL      The outline of the proof that is not a CFL where is below:   Assume the language, , is a CFL and it obeys the Pumping Lemma for Context Free Languages.    A string of length at least will obey the Pumping Lemma for Context Free Languages. Choose to consider , where and     When pumping up, , , and must each increase to stay in . But, because the pumpable part has to be within symbols, there is no way to include all three. (The 's are too far away from the 's)    Thus, our assumpiton was wrong, must not be a CFL by contradiction.      Let's look at another example.   Consider the following language: We will now prove that is not context free.  Proof.  Assume that is a CFL. can be rewritten as:    Consider where .    Since is of length at least , it should obey the Pumping Lemma for Context Free Languages.      Consider a section of , a section made up of the last and the first two 's. By pumping this section up by one, a new string, is created, but this string is no longer a part of .    Consider another section of , one that is made up of the last and first two 's. Pumping this string down by one creates the new string, , but this string is no longer in .      Therefore, by contradiction, is not a CFL.       The most difficult part of proving that any CFL is context free using the Pumping Lemma, is finding the best string to use as your example. Consider the following language: What is a string that we can use to prove is a CFL using the Pumping Lemma?     Was that string unexpected? Were you expecting something closer to: That string will not work for the Pumping Lemma for CFLs.  Another example of this phenomrnon occures when trying to choose a string to pump from the following language: The string, will not allow us to show that is not CFL as using a singular as the portion of the pumpable string would be able to be pumped and stay in the language.      Consider . Is it a CFL? Find a string that can be used to prove or disprove it using the Pumping Lemma for Context Free Languages.    If you are having trouble picking a useful string, consider using the compliment of .    A string that could be used is .    Come up with a language not covered in our course materials that is context free but not regular. Prove it is context free and then proive it isn't regular.    Prove that the following language is not context free using the pumping lemma for context free languages.    Includes strings:   00    11    1010    000000    110110       Prove that the following language is not context free using the pumping lemma for context free languages. This language simulates equations that multiply by 8.   Includes strings:   1*1000=1000    1010*1000=1010000    1000*1000=1000000       Stacks tend to be useful in arithmetic. You might still be able to find HP calculators that use a stack based input. Let's prove simply *add 1* can be a context free language under certain specific configurations. To make this work, the result will be in reverse order. Thus, strings in the language might be: or even .  It is helpful to treat the latter as a special case.  Write a CFG and PDA for this language:        1 0 1 1    +   1    1 1 0 0        1 1    + 1    1 0 0        1 0 1 0    +   1    1 0 1 1                 Use the PL for CFLs to prove the following language is not a Context Free Language:     Use the pumping lemma for CFLs to prove the following language is not a CFL:     Use the pumping lemma for CFLs to prove the following languge is not a CFL:     Use the pummping lemma for CFLs to prove the following language is not a CFL.      "
},
{
  "id": "objectives-13",
  "level": "2",
  "url": "ch-pumping-lemma-context-free.html#objectives-13",
  "type": "Objectives",
  "number": "13",
  "title": "",
  "body": "In this chapter you will learn:  Revisiting Parse Trees and Spotting Loops  The Pumping Lemma for Context Free Languages   "
},
{
  "id": "exploration-29",
  "level": "2",
  "url": "ch-pumping-lemma-context-free.html#exploration-29",
  "type": "Exploration",
  "number": "13",
  "title": "",
  "body": " Consider this CFL below:        Try creating the parse tree for producing the string from this grammar.      That string was able to be generated by a relatively simple parse tree, but the grammar is not in CNF. Try putting the grammar in CNF.                        Considering the grammar in CNF, re-make the parse tree that would produce the string .      Can you see how the same inner and exists in both parse trees? If that is removed from the middle of the trees, then an loop remains. This loop works from . This loop can be removed, or it can be taken as many times as we like.  Here is an example of a string whose loop has been removed:    Here is an example of a string whose loop has been taken many times:    As it is a loop, the loop can be taken an infinite amount of times.  "
},
{
  "id": "exploration-30",
  "level": "2",
  "url": "ch-pumping-lemma-context-free.html#exploration-30",
  "type": "Exploration",
  "number": "14",
  "title": "",
  "body": " The outline of the proof that is not a CFL where is below:   Assume the language, , is a CFL and it obeys the Pumping Lemma for Context Free Languages.    A string of length at least will obey the Pumping Lemma for Context Free Languages. Choose to consider , where and     When pumping up, , , and must each increase to stay in . But, because the pumpable part has to be within symbols, there is no way to include all three. (The 's are too far away from the 's)    Thus, our assumpiton was wrong, must not be a CFL by contradiction.     "
},
{
  "id": "exploration-31",
  "level": "2",
  "url": "ch-pumping-lemma-context-free.html#exploration-31",
  "type": "Exploration",
  "number": "15",
  "title": "",
  "body": " Consider the following language: We will now prove that is not context free.  Proof.  Assume that is a CFL. can be rewritten as:    Consider where .    Since is of length at least , it should obey the Pumping Lemma for Context Free Languages.      Consider a section of , a section made up of the last and the first two 's. By pumping this section up by one, a new string, is created, but this string is no longer a part of .    Consider another section of , one that is made up of the last and first two 's. Pumping this string down by one creates the new string, , but this string is no longer in .      Therefore, by contradiction, is not a CFL.     "
},
{
  "id": "exploration-32",
  "level": "2",
  "url": "ch-pumping-lemma-context-free.html#exploration-32",
  "type": "Exploration",
  "number": "16",
  "title": "",
  "body": " The most difficult part of proving that any CFL is context free using the Pumping Lemma, is finding the best string to use as your example. Consider the following language: What is a string that we can use to prove is a CFL using the Pumping Lemma?     Was that string unexpected? Were you expecting something closer to: That string will not work for the Pumping Lemma for CFLs.  Another example of this phenomrnon occures when trying to choose a string to pump from the following language: The string, will not allow us to show that is not CFL as using a singular as the portion of the pumpable string would be able to be pumped and stay in the language.  "
},
{
  "id": "exercise-107",
  "level": "2",
  "url": "ch-pumping-lemma-context-free.html#exercise-107",
  "type": "Exercise",
  "number": "13.3.1",
  "title": "",
  "body": " Consider . Is it a CFL? Find a string that can be used to prove or disprove it using the Pumping Lemma for Context Free Languages.    If you are having trouble picking a useful string, consider using the compliment of .    A string that could be used is .  "
},
{
  "id": "exercise-108",
  "level": "2",
  "url": "ch-pumping-lemma-context-free.html#exercise-108",
  "type": "Exercise",
  "number": "13.3.2",
  "title": "",
  "body": " Come up with a language not covered in our course materials that is context free but not regular. Prove it is context free and then proive it isn't regular.  "
},
{
  "id": "exercise-109",
  "level": "2",
  "url": "ch-pumping-lemma-context-free.html#exercise-109",
  "type": "Exercise",
  "number": "13.3.3",
  "title": "",
  "body": " Prove that the following language is not context free using the pumping lemma for context free languages.    Includes strings:   00    11    1010    000000    110110     "
},
{
  "id": "exercise-110",
  "level": "2",
  "url": "ch-pumping-lemma-context-free.html#exercise-110",
  "type": "Exercise",
  "number": "13.3.4",
  "title": "",
  "body": " Prove that the following language is not context free using the pumping lemma for context free languages. This language simulates equations that multiply by 8.   Includes strings:   1*1000=1000    1010*1000=1010000    1000*1000=1000000     "
},
{
  "id": "exercise-111",
  "level": "2",
  "url": "ch-pumping-lemma-context-free.html#exercise-111",
  "type": "Exercise",
  "number": "13.3.5",
  "title": "",
  "body": " Stacks tend to be useful in arithmetic. You might still be able to find HP calculators that use a stack based input. Let's prove simply *add 1* can be a context free language under certain specific configurations. To make this work, the result will be in reverse order. Thus, strings in the language might be: or even .  It is helpful to treat the latter as a special case.  Write a CFG and PDA for this language:        1 0 1 1    +   1    1 1 0 0        1 1    + 1    1 0 0        1 0 1 0    +   1    1 0 1 1               "
},
{
  "id": "exercise-112",
  "level": "2",
  "url": "ch-pumping-lemma-context-free.html#exercise-112",
  "type": "Exercise",
  "number": "13.3.6",
  "title": "",
  "body": " Use the PL for CFLs to prove the following language is not a Context Free Language:   "
},
{
  "id": "exercise-113",
  "level": "2",
  "url": "ch-pumping-lemma-context-free.html#exercise-113",
  "type": "Exercise",
  "number": "13.3.7",
  "title": "",
  "body": " Use the pumping lemma for CFLs to prove the following language is not a CFL:   "
},
{
  "id": "exercise-114",
  "level": "2",
  "url": "ch-pumping-lemma-context-free.html#exercise-114",
  "type": "Exercise",
  "number": "13.3.8",
  "title": "",
  "body": " Use the pumping lemma for CFLs to prove the following languge is not a CFL:   "
},
{
  "id": "exercise-115",
  "level": "2",
  "url": "ch-pumping-lemma-context-free.html#exercise-115",
  "type": "Exercise",
  "number": "13.3.9",
  "title": "",
  "body": " Use the pummping lemma for CFLs to prove the following language is not a CFL.   "
},
{
  "id": "ch-tms",
  "level": "1",
  "url": "ch-tms.html",
  "type": "Chapter",
  "number": "14",
  "title": "Turing Machine Basics",
  "body": " Turing Machine Basics  In this chapter you will learn:  Introduction to Turing Machines     Introduction to Turing Machines  As stated in a thesis from Church-Turing, Turing Machines (TMs) are a model for modern computing. They are a structure for how we can think about algorithms and any other processes that computers undertake. If we can prove some things about TMs, we are proving things about the scope of possibility in computer programs!  There are two different types of languages that can be represented using Turing Machines. They are Turing Recognizable ( ) and Turing Decidable ( ) and will be covered later in this chapter. At this time, it is important to know that languages that are are also , CFLs, and RLs. This phenomenon is outlined in the chart below where represents all languages.     Turing Machine (TM) Turing Machines:   have an infinite memory that is represented as a tape    imput begins on the tape    head starts at the first symbole of the imput    to start, empty (non-input) cells of the tape contain s   Below is a visual representation of a tape.         0 0 1 1  2 2          head       The Head  head is a pointer that keeps track of where we are on the tape. As depictied above, it always starts at the first input. This input is anything but a . The head can move in every transition between states. They are able to move left, right, or stay where they are based on input from the tape.  Turing Machines accept languages based on \"marking off\" or reaching the end of input at an expected time. Heads are used to keep track of relevant inputs, and how they recieve their instructions is similar to what we have seen before. Think back to the \"read pop push\" structure that was introduced for PDAs. Heads move in similar ways on a \"read move write\" structure.   1 R       read move write   If a head was given the instruction above, if it read in a 1 then it would move right but write over the 1 with a .   Let's look at an example of a Turing Machine to understand its sturcuture and usefulness. Consider and below.  This string would be represented on a tape as:         0 0 1 1          head     In order to check if the language can be represented by a TM, we need to establish a line of thinking. We ultimately need to check if there is a certain number of 0s, followed by the same number of 1s. But how do we check for this when heads of TMs can only move right, left, or stay in place? And how can this be represented with the \"read move write\" structure? For this language, a potential strategy follows:   Mark off an unmarked 0    Move to the first unmarked 1 and mark it off    Repeat steps 1 and 2 until no more 0s are left, also make sure all 1s are marked off too   This process can be represented in a state diagram like the one below. This diagram was created through following the logical progression above as well as leaning on skills created when creating FAs and PDAs.   But how does this logic and diagram translate to TMs?   The head starts at the first input          0 0 1 1          head        A 0 is read, the head moves right and leaves a behind          0 1 1           head       Read through the remaining 0s until a 1 is read           0 1 1            head       Read in a 1, move left and leave a            0 1            head       Read in a 0, move left, leaving behind a 0.           0 1            head       Read in a , move right leaving a behind          0  1           head       Read in a 0, move right leaving a behind           1            head      Read in a , move right leaving a behind            1            head       Read in a 1, move left and leave a                       head       Read in a , move left leaving a                       head       Read in a , move right leaving a behind                      head       Read in a , move right leaving a behind                      head       Read in a , stay leaving a                       head       As the head ended on the expected , even after checking that all inputs were marked off, the string is accepted as a part of .        Consider and the string, :  Draw the tape that would contain this input, including the head.           0   2          head        Consider the language, : An example string would be . Create the state diagram that would be use to step through this language and tape's TM.   It is acceptable for a certain value to \"fall off\" of the state diagram.       Translate the TM into English:      Give a TM diagram for the language with an equal number of a's and b's, in any order.    Translate the below TM into English, with the alphabet,       Give a TM diagram for the language:     Translate the TM below, with the alphabet, , into English:      Give a TM diagram for the language below.      "
},
{
  "id": "objectives-14",
  "level": "2",
  "url": "ch-tms.html#objectives-14",
  "type": "Objectives",
  "number": "14",
  "title": "",
  "body": "In this chapter you will learn:  Introduction to Turing Machines   "
},
{
  "id": "p-556",
  "level": "2",
  "url": "ch-tms.html#p-556",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Turing Machines (TMs) "
},
{
  "id": "p-563",
  "level": "2",
  "url": "ch-tms.html#p-563",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "head "
},
{
  "id": "exploration-33",
  "level": "2",
  "url": "ch-tms.html#exploration-33",
  "type": "Exploration",
  "number": "1",
  "title": "",
  "body": " Let's look at an example of a Turing Machine to understand its sturcuture and usefulness. Consider and below.  This string would be represented on a tape as:         0 0 1 1          head     In order to check if the language can be represented by a TM, we need to establish a line of thinking. We ultimately need to check if there is a certain number of 0s, followed by the same number of 1s. But how do we check for this when heads of TMs can only move right, left, or stay in place? And how can this be represented with the \"read move write\" structure? For this language, a potential strategy follows:   Mark off an unmarked 0    Move to the first unmarked 1 and mark it off    Repeat steps 1 and 2 until no more 0s are left, also make sure all 1s are marked off too   This process can be represented in a state diagram like the one below. This diagram was created through following the logical progression above as well as leaning on skills created when creating FAs and PDAs.   But how does this logic and diagram translate to TMs?   The head starts at the first input          0 0 1 1          head        A 0 is read, the head moves right and leaves a behind          0 1 1           head       Read through the remaining 0s until a 1 is read           0 1 1            head       Read in a 1, move left and leave a            0 1            head       Read in a 0, move left, leaving behind a 0.           0 1            head       Read in a , move right leaving a behind          0  1           head       Read in a 0, move right leaving a behind           1            head      Read in a , move right leaving a behind            1            head       Read in a 1, move left and leave a                       head       Read in a , move left leaving a                       head       Read in a , move right leaving a behind                      head       Read in a , move right leaving a behind                      head       Read in a , stay leaving a                       head       As the head ended on the expected , even after checking that all inputs were marked off, the string is accepted as a part of .    "
},
{
  "id": "exercise-116",
  "level": "2",
  "url": "ch-tms.html#exercise-116",
  "type": "Exercise",
  "number": "14.2.1",
  "title": "",
  "body": " Consider and the string, :  Draw the tape that would contain this input, including the head.           0   2          head      "
},
{
  "id": "exercise-117",
  "level": "2",
  "url": "ch-tms.html#exercise-117",
  "type": "Exercise",
  "number": "14.2.2",
  "title": "",
  "body": " Consider the language, : An example string would be . Create the state diagram that would be use to step through this language and tape's TM.   It is acceptable for a certain value to \"fall off\" of the state diagram.     "
},
{
  "id": "exercise-118",
  "level": "2",
  "url": "ch-tms.html#exercise-118",
  "type": "Exercise",
  "number": "14.2.3",
  "title": "",
  "body": " Translate the TM into English:    "
},
{
  "id": "exercise-119",
  "level": "2",
  "url": "ch-tms.html#exercise-119",
  "type": "Exercise",
  "number": "14.2.4",
  "title": "",
  "body": " Give a TM diagram for the language with an equal number of a's and b's, in any order.  "
},
{
  "id": "exercise-120",
  "level": "2",
  "url": "ch-tms.html#exercise-120",
  "type": "Exercise",
  "number": "14.2.5",
  "title": "",
  "body": " Translate the below TM into English, with the alphabet,     "
},
{
  "id": "exercise-121",
  "level": "2",
  "url": "ch-tms.html#exercise-121",
  "type": "Exercise",
  "number": "14.2.6",
  "title": "",
  "body": " Give a TM diagram for the language:   "
},
{
  "id": "exercise-122",
  "level": "2",
  "url": "ch-tms.html#exercise-122",
  "type": "Exercise",
  "number": "14.2.7",
  "title": "",
  "body": " Translate the TM below, with the alphabet, , into English:    "
},
{
  "id": "exercise-123",
  "level": "2",
  "url": "ch-tms.html#exercise-123",
  "type": "Exercise",
  "number": "14.2.8",
  "title": "",
  "body": " Give a TM diagram for the language below.   "
},
{
  "id": "ch-tm-classifications",
  "level": "1",
  "url": "ch-tm-classifications.html",
  "type": "Chapter",
  "number": "15",
  "title": "Classifications of Turing Machines",
  "body": " Classifications of Turing Machines  In this chapter you will learn:  Predecessors to Turing Machines  Goldbach's Conjecture  Varieties of Turing Machines     Early Turing Machines  Before Turing Machines, there were a few different automatas that existed that laid the ground work for Turing's thesis, but they had differing amounts of power and capabilities.   Linear Bounded Automata (LBAs)   Linear Bounded Automata A class of context seensitive languages, more powerful than CFLs, but nto as powerful as a TM    Muti-Tape   Muti-Tape Same power as a TM    2-Stack PDA   2-Stack PDA Same power as a TM    Transducer   Transducer A TM who's job is to modify the tape    Non-Determinism   Non-Determinism Same power as a TM    Printer TM   Printer TM Ennumerates\/ prints all strings in its language     Here is a diagram to help illustrate how LBAs fit into the classification of languages:    The most interesting part of TMs happens when we start passing them in as input.    Goldbach's Conjecture  Before we get to using TMs as input, let's look at Goldbach's Conjecture.   Goldbach's Conjecture  Goldbach's Conjecture proposes that every even county number , where , is equal to the sum of two primes. Here are some examples:   4 = 2 + 2    6 = 3 + 3    8 = 3 + 5    10 = 3 + 7    12 = 5 + 7    14 = 7 + 7    16 = 3 + 13    ...   This conjecture has never been proven, but no counter example has ever been found.  Now, think about how you might write a computer program to:   Exaustively print the answers like we did above                 Walk through a list of primes up to . For each, walk through the list again. If their sum is , print them.    If it didn't print, then it would have shown a counter-example.       Check if should be added to primes.    Continue to loop.       What if we wanted to look for a counter-example?   If such an example exists, this TM will eventually halt when it finds in.    What happens to this TM if no such counter-example exists?   It never halts! It must loop forever, forever hunting.         But why does all of this matter?   If Goldbach's Conjecture is true, then the primter TM algorithm truly prints every string in the conjecture.    If it is not true, then that printer will miss some even numbers, or the counter-example hunter will never halt.   The counter-example hunter never halts and we have no way to know if it will. This leads us to an interesting distinguishing characteristic of some TMs.    Varieties of Turing Machines  There are two different categories of languages that TMs can recognize.   Recognizable Turing Machines  A TM is recognizable  Recognizable Turing Machine if it can accept on its input. It may halt and reject some strongs but it might loop forever on others. These languages are Turing-recognizable.  Printer TMs fall into this category because we accept by looking to see if the string is printed, but we must wait forever to see if it will never be printed.    This is a thought experiment to look at recognizability and decidablity.  Consider a book that lists books in the library that do not reference themselves. Add this book to the library. Does this book reference itself?    Decideable Turing Machines  A TM is decidable  Decidable Turing Machine if it can halt, either via accept or reject, for any input given to it. These languages are Turing-decidable.       is the language of the diagram of the TM below. The diagram in the TM shows a recognizer of . What does this mean about the classification of ?  Be sure to discuss: Td, Tr, both, neither. What about the classification of the complement of the ?      Explain and describe in detail the error in the following proof.   is Tr but its complement is not.   This means Tr are not closed under complementation.    Recognizing a language like is Tr.    Thus, its complement must not be Tr.       Given a program's source code \\(use your favorite language\\), give a decidable alogrithm that determines if that code contains a control statement (like if, for, while, ...).   Rice's Theorem states the fact that checking if that program actually runs that code is undecidable.     "
},
{
  "id": "objectives-15",
  "level": "2",
  "url": "ch-tm-classifications.html#objectives-15",
  "type": "Objectives",
  "number": "15",
  "title": "",
  "body": "In this chapter you will learn:  Predecessors to Turing Machines  Goldbach's Conjecture  Varieties of Turing Machines   "
},
{
  "id": "p-592",
  "level": "2",
  "url": "ch-tm-classifications.html#p-592",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Linear Bounded Automata (LBAs) Muti-Tape 2-Stack PDA Transducer Non-Determinism Printer TM "
},
{
  "id": "p-602",
  "level": "2",
  "url": "ch-tm-classifications.html#p-602",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Goldbach's Conjecture "
},
{
  "id": "p-627",
  "level": "2",
  "url": "ch-tm-classifications.html#p-627",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "recognizable "
},
{
  "id": "exploration-34",
  "level": "2",
  "url": "ch-tm-classifications.html#exploration-34",
  "type": "Exploration",
  "number": "2",
  "title": "",
  "body": " This is a thought experiment to look at recognizability and decidablity.  Consider a book that lists books in the library that do not reference themselves. Add this book to the library. Does this book reference itself?  "
},
{
  "id": "p-631",
  "level": "2",
  "url": "ch-tm-classifications.html#p-631",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "decidable "
},
{
  "id": "exercise-124",
  "level": "2",
  "url": "ch-tm-classifications.html#exercise-124",
  "type": "Exercise",
  "number": "15.4.1",
  "title": "",
  "body": "  is the language of the diagram of the TM below. The diagram in the TM shows a recognizer of . What does this mean about the classification of ?  Be sure to discuss: Td, Tr, both, neither. What about the classification of the complement of the ?    "
},
{
  "id": "exercise-125",
  "level": "2",
  "url": "ch-tm-classifications.html#exercise-125",
  "type": "Exercise",
  "number": "15.4.2",
  "title": "",
  "body": " Explain and describe in detail the error in the following proof.   is Tr but its complement is not.   This means Tr are not closed under complementation.    Recognizing a language like is Tr.    Thus, its complement must not be Tr.     "
},
{
  "id": "exercise-126",
  "level": "2",
  "url": "ch-tm-classifications.html#exercise-126",
  "type": "Exercise",
  "number": "15.4.3",
  "title": "",
  "body": " Given a program's source code \\(use your favorite language\\), give a decidable alogrithm that determines if that code contains a control statement (like if, for, while, ...).   Rice's Theorem states the fact that checking if that program actually runs that code is undecidable.  "
},
{
  "id": "ch-diagonalization",
  "level": "1",
  "url": "ch-diagonalization.html",
  "type": "Chapter",
  "number": "16",
  "title": "Diagonalization",
  "body": " Diagonalization  In this chapter you will learn:  Hibert's Hotel  Introduction to Diagonalization  Examples of Turing Machines  The Halting Problem     Hilbert's Hotel  Diagonalization is a concept best explained through example. For this we will look at Hilbert and his hotel or Hilbert's Hotel  Hilbert's Hotel.   Consider Hilbert who owns a fancy hotel that can fit an infinite amount of people and the rooms are all occupied. The rooms are numbered starting at 1.    A vistior comes up to Hiblert and requests to stay for the night.    Another patron comes up to Hilbert and asks to stay, as he has an infinite amount of rooms, he can accomodate this request.    To add the new patron to his hotel, Hilbert shifts all of his current guests down a room.    Since Hilbert has an infinite amount of rooms, this process of adding a visitor can occur an infinite amount of times. But, what happens when a bus with an infinite amount of passengers arrives? To help with the visualization, try numbering the patrons already in rooms.    Consider how the rooms are labeled using the counting numbers: and the patrons currently residing in the rooms correspond to the natural numbers: What set would this make with the infinite amount of bus patrons joining the hotel? What would this look like in from a \"folding\" pattern? The bus patrons are numbered -1, -2, and onwards. This is the set of integers. There is a one-to-one correspondance among the sets.   Counting: = { 1, 2, 3, 4, 5, ...}       : = { 0, 1, 2, 3, 4, ...}       : = { 0, -1, 1, -2, 2, ...}   But, how would this look in Hilbert's Hotel?    Could we ever prove that more patrons arrived on the bus than were in the hotel already?    Introduction to Diagonalization  Consider what would happen if we tried to represent the entire set of real numbers in Hilbert's Hotel. What would the patrons look like? As a reminder: What would happen if was just the set of real numbers between 0 and 1? Is there a better was to list the elements of this set out? Consider changing just one element at a times.   1: 0. 1 0 0 0 ...    2: 0. 1 1 0 0 ...    3: 0. 1 1 1 0 ...    4: 0. 1 1 1 1 ...   Considering only one number changed each time, we know that there are each unique elements of the set. This thinking can be referred to as Diagonalization  diagonalization , and it can be used not only to build sets but also to ensure that each element is unique.  This is particularly relevant in TMs as the process can be used to prove that a new machine that you create accepts a langugae that is different from the languages of all other machines. We will look at another finite example below, but this conecept only truly works when there are an infinite amount of machines.  As mentioned earlier, TMs get more excited when we start passing them as input. Consider the output chart below where an array of TMs are passed into eachother and themselves. If it is decidable, then the machine will either Accept ( ) or Reject ( ).      ...      ...      ...      ...      ...      ...                ...      ...      Examples of Turing Machines   Acceptance Turing Machine  There are different types of information that can be deduced from a TM's classification.   If a language, , is , then is .          If a language, , is and not , then is not .      If a language, , is and is , then and are both .       All of this is to say that there may exist a language where neither it nor its compliment are Turing Reconidable.    Consider is an input was given to a machine that runs with different machines at the same time. The overall output depends on the final state of the machine.  The Acceptance Turing Machine is a set of pairs of machines and inputs where the machine accepts the input. In other words: Here, you get the input and break it into the machine, , and the input, . Then, you simulate as a TM running on . If accepts, then the accepts. If the rejects, then the rejects.  The is a Turing decidable.    Other Turing Machines  There are other speciality types of TMs as well.   The Regular is an undecidable machine that accepts when the language of a input machine is regular.     The Tape is an undecidable machine that writes an \"a\" to the given tape.     The S .         The Halting Problem  We cannot tell if a TM will halt on a given input, making Turing Machines not decideable. This is represented by .     The self-denying paradox is an example of a language that is not Tr because of the paradox. The machine built for this language cannot halt when running with itself as input. The complement of this paradox would be th set of machines that accept themselves as input. To craft this language, we could take our list of TMs and TMs as input and make a TM that does what that machine does on its own input (making a trace along the diagonal).  Would this new machine accept itself when receiving itself as input? Explain. Is it possible for this machine to have already appeared? Explain.      ...      ...      ...      ...           The self-denying paradox is an example of a languge that is not Tr because of the paradox. The machine built for this language cannot halt when running with itself as input.   Assume the language above is decidable and use the chart below. Use diagonalization. Describe the language of this new machine and it's paradox.      ...      ...      ...      ...           Describe the halting problem. Is it Td, Tr, or neither?   This designation is important because of its impact on all of computer programming.)    Rice's Theorem applies to program meaning. It is undecidable if a program will ever negate a variable, for example. But, I could write a print statement around this negation to determine if it runs, why isn't this then a decider?     "
},
{
  "id": "objectives-16",
  "level": "2",
  "url": "ch-diagonalization.html#objectives-16",
  "type": "Objectives",
  "number": "16",
  "title": "",
  "body": "In this chapter you will learn:  Hibert's Hotel  Introduction to Diagonalization  Examples of Turing Machines  The Halting Problem   "
},
{
  "id": "p-641",
  "level": "2",
  "url": "ch-diagonalization.html#p-641",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hilbert's Hotel. "
},
{
  "id": "p-649",
  "level": "2",
  "url": "ch-diagonalization.html#p-649",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "diagonalization "
},
{
  "id": "exercise-127",
  "level": "2",
  "url": "ch-diagonalization.html#exercise-127",
  "type": "Exercise",
  "number": "16.5.1",
  "title": "",
  "body": " The self-denying paradox is an example of a language that is not Tr because of the paradox. The machine built for this language cannot halt when running with itself as input. The complement of this paradox would be th set of machines that accept themselves as input. To craft this language, we could take our list of TMs and TMs as input and make a TM that does what that machine does on its own input (making a trace along the diagonal).  Would this new machine accept itself when receiving itself as input? Explain. Is it possible for this machine to have already appeared? Explain.      ...      ...      ...      ...         "
},
{
  "id": "exercise-128",
  "level": "2",
  "url": "ch-diagonalization.html#exercise-128",
  "type": "Exercise",
  "number": "16.5.2",
  "title": "",
  "body": " The self-denying paradox is an example of a languge that is not Tr because of the paradox. The machine built for this language cannot halt when running with itself as input.   Assume the language above is decidable and use the chart below. Use diagonalization. Describe the language of this new machine and it's paradox.      ...      ...      ...      ...         "
},
{
  "id": "exercise-129",
  "level": "2",
  "url": "ch-diagonalization.html#exercise-129",
  "type": "Exercise",
  "number": "16.5.3",
  "title": "",
  "body": " Describe the halting problem. Is it Td, Tr, or neither?   This designation is important because of its impact on all of computer programming.)  "
},
{
  "id": "exercise-130",
  "level": "2",
  "url": "ch-diagonalization.html#exercise-130",
  "type": "Exercise",
  "number": "16.5.4",
  "title": "",
  "body": " Rice's Theorem applies to program meaning. It is undecidable if a program will ever negate a variable, for example. But, I could write a print statement around this negation to determine if it runs, why isn't this then a decider?  "
},
{
  "id": "ch-reducibility",
  "level": "1",
  "url": "ch-reducibility.html",
  "type": "Chapter",
  "number": "17",
  "title": "Reducibility",
  "body": " Reducibility  In this chapter you will learn:  Reducibility  Provung Reducibility     Introduction to Reducibility  Reducibility is a way to show that two problems or questions are the same with the goal of having one problem be easier than the other. In general, we will take a problem, , and use it to show a solution to another problem, . From here on out, we will use to mean that something is not Turing decidable. We will also use to mean that something is not Turing recognizable.   Consider the following problem: Find the areas of a square.  What is one way to solve this problem?   Length times width! We could solve the problem by finding the width and squaring it.   What is another way to solve this problem?   Don't put too much thought into this.    Another option is to find an Oracle! They would be able to tell us the area of the square.   There is obviously one of these solutions that is much easier to reasonably accomplish than the other one. That is our goal, to find an easier way to reduce a given problem to the easiest, quickest problem to solve.   If a problem, , reduces to problem, , then is not harder than , and is not easier than . If and is undecidable then is undecidable. The symbol is being used to represent \"reduces to\".   Consider: In other words, does the Acceptance Turing Machine reduce to the Halting Turing Machine?  I can \"solve\" (decide) in the presence of a decider for .     Assume we have a decider, , for .    Given , I can decide , which is a contradiction because is undecidable.       Solving allows us to solve . So, is at least as complex as , because if it were easier, would be too. Thus, is undecidable.   The above exploration is not how we will do most reductions, but it is a great introduction to the idea.    Proving Reducibility  We will first walk through an example of a reducibility proof.   Consider: We then come up with the diagram below:    Where:   Q  a TM constructed from and , and accepts on input of     else  Run on , if accepts, accept!     This had been a proof sketch.   We will now go through a proof outline and a full proof.  Outline:   We want to show is undecidable.    We know that is undecidable.    If we can show that reduces to , then we will know that it is undecidable (because if it weren't, the reduction would allow to be decidable).     We will now look at a full example proof. Note that the itallicized language is largely epositiory and set up language.   Assume is decidable and there is some machine that decides it.  , when handed a TM, will tell us if the TM's langbuage is regular decidably.     We show reduces to .    We create a machine, , using the and imputs from . takes input .   If is in , accepts.    Otherwise, runs on . If accepts, accepts.   This machine, Q, is special.     If M accepts w, Q accepts all inputs x. This is a regular language.      If M does not accept w, Q accepts only inputs that match . This is NOT a regular language.           We now take our machine, , and pass it over to our decider, . will tell us if the language of is regular or not. If it is regular, accepts . If it is not, then does not accept. We've built an decider.     So, we've taken inputs to , crafted a machine, , passed it to , and found that somehow helps us decide .     We know is not decidable, so this is a contradition.    Therefore, our assumption that was decidable must have been incorrect.        Prove that is decidable.        If then rejects     accepts rejects    else accepts .           Prove that is decidable.    General idea: Build a machine, , such that when we pass it to (the decider for the language in question), accepts when accepts (and doesn't when it doesn't).    Prove the following language is undecidable by using reducibility and .     Consider the TM below:     is undecidable and we can prove this with a reduction. Show that .     "
},
{
  "id": "objectives-17",
  "level": "2",
  "url": "ch-reducibility.html#objectives-17",
  "type": "Objectives",
  "number": "17",
  "title": "",
  "body": "In this chapter you will learn:  Reducibility  Provung Reducibility   "
},
{
  "id": "exploration-35",
  "level": "2",
  "url": "ch-reducibility.html#exploration-35",
  "type": "Exploration",
  "number": "3",
  "title": "",
  "body": " Consider the following problem: Find the areas of a square.  What is one way to solve this problem?   Length times width! We could solve the problem by finding the width and squaring it.   What is another way to solve this problem?   Don't put too much thought into this.    Another option is to find an Oracle! They would be able to tell us the area of the square.   There is obviously one of these solutions that is much easier to reasonably accomplish than the other one. That is our goal, to find an easier way to reduce a given problem to the easiest, quickest problem to solve.  "
},
{
  "id": "exploration-36",
  "level": "2",
  "url": "ch-reducibility.html#exploration-36",
  "type": "Exploration",
  "number": "4",
  "title": "",
  "body": " Consider: In other words, does the Acceptance Turing Machine reduce to the Halting Turing Machine?  I can \"solve\" (decide) in the presence of a decider for .     Assume we have a decider, , for .    Given , I can decide , which is a contradiction because is undecidable.       Solving allows us to solve . So, is at least as complex as , because if it were easier, would be too. Thus, is undecidable.  "
},
{
  "id": "exploration-37",
  "level": "2",
  "url": "ch-reducibility.html#exploration-37",
  "type": "Exploration",
  "number": "5",
  "title": "",
  "body": " Consider: We then come up with the diagram below:    Where:   Q  a TM constructed from and , and accepts on input of     else  Run on , if accepts, accept!     This had been a proof sketch.  "
},
{
  "id": "exercise-131",
  "level": "2",
  "url": "ch-reducibility.html#exercise-131",
  "type": "Exercise",
  "number": "17.3.1",
  "title": "",
  "body": " Prove that is decidable.        If then rejects     accepts rejects    else accepts .         "
},
{
  "id": "exercise-132",
  "level": "2",
  "url": "ch-reducibility.html#exercise-132",
  "type": "Exercise",
  "number": "17.3.2",
  "title": "",
  "body": " Prove that is decidable.    General idea: Build a machine, , such that when we pass it to (the decider for the language in question), accepts when accepts (and doesn't when it doesn't).  "
},
{
  "id": "exercise-133",
  "level": "2",
  "url": "ch-reducibility.html#exercise-133",
  "type": "Exercise",
  "number": "17.3.3",
  "title": "",
  "body": " Prove the following language is undecidable by using reducibility and .   "
},
{
  "id": "exercise-134",
  "level": "2",
  "url": "ch-reducibility.html#exercise-134",
  "type": "Exercise",
  "number": "17.3.4",
  "title": "",
  "body": " Consider the TM below:     is undecidable and we can prove this with a reduction. Show that .  "
},
{
  "id": "generated-images",
  "level": "1",
  "url": "generated-images.html",
  "type": "Chapter",
  "number": "18",
  "title": "Newly Generated Images",
  "body": " Newly Generated Images  Welcome to Newly Generated Images  "
},
{
  "id": "glossary",
  "level": "1",
  "url": "glossary.html",
  "type": "Glossary",
  "number": "",
  "title": "Glossary",
  "body": " DFA Deterministic Finite Automata  FA Finite Automata  NFA Non-deterministic Finite Automata  TM Turing Machines  "
},
{
  "id": "solutions-1",
  "level": "1",
  "url": "solutions-1.html",
  "type": "Appendix",
  "number": "A",
  "title": "Selected Hints",
  "body": " Selected Hints  "
},
{
  "id": "solutions-2",
  "level": "1",
  "url": "solutions-2.html",
  "type": "Appendix",
  "number": "B",
  "title": "Selected Solutions",
  "body": " Selected Solutions  "
},
{
  "id": "appendix-1",
  "level": "1",
  "url": "appendix-1.html",
  "type": "Appendix",
  "number": "C",
  "title": "List of Symbols",
  "body": " List of Symbols   "
},
{
  "id": "index-1",
  "level": "1",
  "url": "index-1.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
