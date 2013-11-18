require './roll_the_dies.rb'

def assert(expected, actual)
  raise "Expected #{expected}, but got #{actual}" unless expected == actual
end

assert true, true 
puts "All tests passed!"
