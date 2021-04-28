class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.text :description
      t.integer :capacity
      t.string :type_of

      t.timestamps
    end
  end
end
