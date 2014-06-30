class CreateImMovies < ActiveRecord::Migration
  def change
    create_table :im_movies do |t|
      t.string :title
      t.string :tagline
      t.references :user

      t.timestamps
    end
  end
end
