league = League.create(name: 'cereal')

cereals = %w[
  capn_crunch cinnamon_toast_crunch french_toast_crunch fruit_loops
  lucky_charms frosted_flakes honey_comb golden_grahams trix life
  raisin_bran pops kix honey_nut_cheerios frosted_mini_wheats
  count_chocula cocoa_puffs apple_jacks
]

cereals.each do |cereal|
  Contender.create(name: cereal, league: league)
end
