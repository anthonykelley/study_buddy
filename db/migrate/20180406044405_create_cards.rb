class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :front
      t.text :back
      t.string :chapter

      t.timestamps
    end
  end
end
