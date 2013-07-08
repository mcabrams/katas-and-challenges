# The Greatest Common Divisor of a given set of integers is the greatest integer
# that can divide these integers without any remainder. 

# The goal is to write a program that takes two integers, and returns the
# greatest common divisor. You may pick any algorithm or  approach you prefer. 

# Source: http://www.reddit.com/r/dailyprogrammer/comments/1hvh6u/070813_challenge_132_easy_greatest_common_divisor/

def common_divisor(int1, int2)
  smallest_possible = [int1, int2].min
  possibilities = smallest_possible.downto(1).to_a

  possibilities.each do |i|
    return i if int1 % i == 0 && int2 % i == 0
  end
end

p "Please enter two space delimited integers to find common divisor"
ints = gets.chomp.split(' ');
ints.map! { |i| i.to_i }
p common_divisor(ints[0], ints[1])
