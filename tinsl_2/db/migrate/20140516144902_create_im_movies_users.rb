class CreateImMoviesUsers < ActiveRecord::Migration
  def change
    create_table :im_movies_users do |t|
      t.references :im_movie
      t.references :user
    end
  end
end
