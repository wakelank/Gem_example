class CreateActorsImMovies < ActiveRecord::Migration
  def change
    create_table :actors_im_movies do |t|
      t.references :actors
      t.references :movie
    end
  end
end
