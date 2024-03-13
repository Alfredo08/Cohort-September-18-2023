class UrlsController < ApplicationController
    def index
        @title = "Hey there Class of September 18, 2023"
        @urls = Url.all
        # render json: @urls
    end

    def show
        @users = User.all
    end

    def create
        puts "---- Starting adding url ----"
        new_url = {
            longURL: params[:longURL],
            users_id: params[:users_id].to_i,
            shortURL: SecureRandom.base64(6)
        }

        Url.new(new_url).save
        puts "---- Finishing adding url ----"
        redirect_to '/urls'
    end
end
