10.times {
  restaurant = Restaurant.create(name: Faker::Restaurant.name, type_of: Faker::Restaurant.type, description: Faker::Restaurant.description, capacity: rand(20..50))

  rand(4).times {
    restaurant.reviews.create(username: Faker::Artist.name.downcase, comment: Faker::Restaurant.review, rating: 5)
  }
}
