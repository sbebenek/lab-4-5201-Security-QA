describe("Test guessNum function", function(){
    describe("Testing guessNum to pass", function(){
        it("should return \"You guessed it!\" when the correct number is entered", function(){
            var guess = 4;
            expect(guessNum(guess)).toEqual("You guessed it!");
        });
        it("should return \"Way off! Pick between 1 and 10.\" when an incorrect number within the allowed range is entered", function(){
            var guess = 45;
            expect(guessNum(guess)).toEqual("Way off! Pick between 1 and 10.");
        });
    });//end of test to pass suite
    describe("Testing guessNum to fail", function(){
        it("should return \"A number was not input.\" when a NaN value is entered", function(){
            var guess = "e";
            expect(guessNum(guess)).toEqual("A number was not input.");
        });
        it("should return \"A value was not entered.\" if an empty value is entered", function(){
            var guess = "";
            expect(guessNum(guess)).toEqual("A value was not entered.");
        });
    });//end of test to fail suite
    describe("Testing guessNum boundary", function(){
        it("should return \"Way off! Pick between 1 and 10.\" when the number is just outside the bottom range", function(){
            var guess = 0;
            expect(guessNum(guess)).toEqual("Way off! Pick between 1 and 10.");
        });
        it("should return \"Guess again.\" when the number is at the bottom range", function(){
            var guess = 1;
            expect(guessNum(guess)).toEqual("Guess again.");
        });
        it("should return \"Guess again.\" when the number is just within the bottom range", function(){
            var guess = 2;
            expect(guessNum(guess)).toEqual("Guess again.");
        });
        it("should return \"Way off! Pick between 1 and 10.\" when the number is just outside the top range", function(){
            var guess = 11;
            expect(guessNum(guess)).toEqual("Way off! Pick between 1 and 10.");
        });
        it("should return \"Guess again.\" when the number is at the top range", function(){
            var guess = 10;
            expect(guessNum(guess)).toEqual("Guess again.");
        });
        it("should return \"Guess again.\" when the number is just within the top range", function(){
            var guess = 9;
            expect(guessNum(guess)).toEqual("Guess again.");
        });
    });//end of boundary test
});//END OF MAIN TEST WUITE