class CreateUrls < ActiveRecord::Migration[7.0]
  def change
    create_table :urls do |t|
      t.string :longURL
      t.string :shortURL
      t.timestamps
    end
  end
end
