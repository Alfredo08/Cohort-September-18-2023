
i = 1

while i <= 10
    puts i
    i += 1
end

puts '-------'

i = 11

loop do
    puts i
    i += 1
    break if i > 10
end

puts '-------'

(1..10).each do |num|
    puts num
end

puts '-------'

names = ['Alex', 'Martha', 'Roger', 'Julie', 'Alan']
names.each do |element|
    puts element
end

puts '-------'
names.each_with_index do |element, index|
    puts " #{element} #{index}"
end

# Check the map keyword
