# project-calculator
This is a calculator I built with HTML, CSS and plain JavaScript. It is the final project of the foundations course in The Odin Project.

## What it does

You can add, subtract, multiply, divide and raise numbers to a power using the exp button. It handles decimals and only lets you type one dot per number, so something like 1..5 can't happen. You can also use negative numbers, so typing -5 + 3 gives -2 and 5 x -3 gives -15.

Operations can be chained. If you type 1 + 2 + 3 and press equals, it works through them from left to right and gives 6. The DEL button removes the last digit or operator you typed, AC clears everything, and Ans puts the previous result into your next calculation.

I also dealt with a few small problems along the way. Results are rounded so 0.1 + 0.2 shows 0.3 instead of a long messy number, and dividing by zero shows a message instead of Infinity.

## Using the keyboard

You don't have to click the buttons. Number keys and the dot key enter numbers, and the plus, minus, star, slash and caret keys work as operators. Enter or the equals key calculates, Backspace deletes the last entry, and Escape clears everything.

## How to run it

There is nothing to install or build. Download the project and open index.html in your browser. The project expects the stylesheet to be in a folder called css and the script in a folder called js, next to index.html.

## What I practiced

I learned how to keep track of a calculator's state with a few variables for the first number, the second number and the operator. I practiced selecting elements on the page and reacting to both clicks and key presses. A lot of the work was handling awkward input, like pressing two operators in a row, typing leading zeros or dividing by zero, and testing those cases by hand until they behaved properly.
