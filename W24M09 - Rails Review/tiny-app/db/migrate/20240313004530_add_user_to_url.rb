class AddUserToUrl < ActiveRecord::Migration[7.0]
  def change
    add_reference :urls, :users
  end
end
