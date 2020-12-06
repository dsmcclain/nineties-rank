class ContendersController < ApplicationController
  def index
    render json: Contender.all
  end
end
