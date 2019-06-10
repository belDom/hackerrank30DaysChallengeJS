## Day 19: Interfaces

class AdvancedArithmetic(object):
    def divisorSum(self, n):
        raise NotImplementedError


class Calculator(AdvancedArithmetic):
    # Return the sum of all divisors of n
    def divisorSum(self, n):
        sum = 0
        for i in range(n + 1):
            if (i != 0 and n % i == 0):
                sum = sum + i
        
        return sum


n = 6
my_calculator = Calculator()
s = my_calculator.divisorSum(n)
print("I implemented: " + type(my_calculator).__bases__[0].__name__)
print(s)
