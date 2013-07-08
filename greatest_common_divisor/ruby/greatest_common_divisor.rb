# The Greatest Common Divisor of a given set of integers is the greatest integer
# that can divide these integers without any remainder. 

# The goal is to write a program that takes two integers, and returns the
# greatest common divisor. You may pick any algorithm or  approach you prefer. 

def common_divisor(int1, int2)
  smallest_possible = [int1, int2].min
  possibilities = smallest_possible.downto(1).to_a

  possibilities.each do |i|
    return i if int1 % i == 0 && int2 % i == 0
  end
end
