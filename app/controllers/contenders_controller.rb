class ContendersController < ApplicationController
  def index
    render json: Contender.first(params[:number])
  end

  def update
    update1 = Contender.find(params[:winner]).increment(:wins, 1)
    update2 = Contender.find(params[:loser]).increment(:losses, 1)
    response = [update1, update2]
    render json: response
  end
end
