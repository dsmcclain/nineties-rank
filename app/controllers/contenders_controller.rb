class ContendersController < ApplicationController
  def index
    render json: Contender.first(params[:number])
  end

  def update
    winner = Contender.find(params[:winner]).increment(:wins, 1)
    loser = Contender.find(params[:loser]).increment(:losses, 1)
    response = [winner, loser]

    render json: response if winner.save && loser.save
  end
end
