
class Book
    # Scope of attributes
    # Getter scope
    # attr_reader :title, :authors, :num_pages
    # Setter scope
    # attr_writer :title, :authors, :num_pages
    # Both getter and setter
    attr_accessor :title, :authors, :num_pages

    # Constructor
    def initialize title, authors, num_pages
        # Attributes
        @title = title
        @authors = authors
        @num_pages = num_pages
    end

    # Methods
    def print_info
        puts "Title: #{@title}"
        puts "Authors: #{@authors}"
        puts "Num of pages: #{@num_pages}"
    end

    # Setter
    def update_title new_title
        @title = new_title
    end

    # Getter
    def get_title
        @title
    end
end

book_one = Book.new "Book A", ["Author 1", "Author 2"], 300
puts book_one

puts book_one.title
book_one.update_title "Ruby on Rails"
puts book_one.print_info

book_two = Book.new "Book B", ["Author 1", "Author 3", "Author 4"], 500
puts book_two.title 