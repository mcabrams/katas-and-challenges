require './greatest_common_divisor.rb'

def assert(expected, actual)
  raise "Expected #{expected}, but got #{actual}" unless expected == actual
end

assert 1,     common_divisor(2, 3)
assert 2,     common_divisor(2, 8)
assert 4,     common_divisor(12, 16)
assert 4,     common_divisor(32, 12)
assert 16,    common_divisor(16, 16)
assert 1,     common_divisor(142341, 512345)
assert 65535, common_divisor(65535, 4294967295)
puts "All tests passed!"
