class BeatsController < ApplicationController

    def index 
        render json: Beat.all
    end


    def create
        beat = Beat.create!(beat_params)
        render json: beat, status: :created
    end

    def show
        render json: find_beat
    end

    def show_featured_beats
        beats = Beat.all

        filtered_beats= beats.select {|b| b.featured_beats}
        if filtered_beats.length <3 
            return render json: 'There are less then 3 featured beats in the data base right now'
        end
        

        random_number_1 = rand(filtered_beats.length)
        random_number_2=  rand(filtered_beats.length)
        random_number_3= rand(filtered_beats.length)

        while random_number_1 == random_number_2 or random_number_1 == random_number_3 or random_number_2 == random_number_3  do

            random_number_1 = rand(filtered_beats.length)
            random_number_2=  rand(filtered_beats.length)
            random_number_3= rand(filtered_beats.length)
           
        end

        featured_beats_array = []

        featured_beats_array.push(filtered_beats[random_number_1])
        featured_beats_array.push(filtered_beats[random_number_2])
        featured_beats_array.push(filtered_beats[random_number_3])

        render json: featured_beats_array
    end

    def show_current_deals_and_sales
        beats = Beat.all

        filtered_beats= beats.select {|b| b.current_deal_sale}
        if filtered_beats.length <3 
            return render json: 'There are less then 3 sales going on in the data base right now'
        end
        

        random_number_1 = rand(filtered_beats.length)
        random_number_2=  rand(filtered_beats.length)
        random_number_3= rand(filtered_beats.length)

        while random_number_1 == random_number_2 or random_number_1 == random_number_3 or random_number_2 == random_number_3  do

            random_number_1 = rand(filtered_beats.length)
            random_number_2=  rand(filtered_beats.length)
            random_number_3= rand(filtered_beats.length)
           
        end

        current_deal_sale_array = []

        current_deal_sale_array.push(filtered_beats[random_number_1])
        current_deal_sale_array.push(filtered_beats[random_number_2])
        current_deal_sale_array.push(filtered_beats[random_number_3])

        render json: current_deal_sale_array
    end

    def show_newest_beats
        beats = Beat.all

        beat_length= beats.length

        newest_beats_array= []

        newest_beats_array.push(beats[beat_length-1])
        newest_beats_array.push(beats[beat_length-2])
        newest_beats_array.push(beats[beat_length-3])

        render json:  newest_beats_array

    end

    def special_architypes


        def show_featured_beats
            beats = Beat.all
    
            filtered_beats= beats.select {|b| b.featured_beats}
            if filtered_beats.length <3 
                return render json: 'There are less then 3 featured beats in the data base right now'
            end
            
    
            random_number_1 = rand(filtered_beats.length)
            random_number_2=  rand(filtered_beats.length)
            random_number_3= rand(filtered_beats.length)
    
            while random_number_1 == random_number_2 or random_number_1 == random_number_3 or random_number_2 == random_number_3  do
    
                random_number_1 = rand(filtered_beats.length)
                random_number_2=  rand(filtered_beats.length)
                random_number_3= rand(filtered_beats.length)
               
            end
    
            featured_beats_array = []
    
            featured_beats_array.push(filtered_beats[random_number_1])
            featured_beats_array.push(filtered_beats[random_number_2])
            featured_beats_array.push(filtered_beats[random_number_3])
    
            return featured_beats_array
        end
    
        def show_current_deals_and_sales
            beats = Beat.all
    
            filtered_beats= beats.select {|b| b.current_deal_sale}
            if filtered_beats.length <3 
                return render json: 'There are less then 3 sales going on in the data base right now'
            end
            
    
            random_number_1 = rand(filtered_beats.length)
            random_number_2=  rand(filtered_beats.length)
            random_number_3= rand(filtered_beats.length)
    
            while random_number_1 == random_number_2 or random_number_1 == random_number_3 or random_number_2 == random_number_3  do
    
                random_number_1 = rand(filtered_beats.length)
                random_number_2=  rand(filtered_beats.length)
                random_number_3= rand(filtered_beats.length)
               
            end
    
            current_deal_sale_array = []
    
            current_deal_sale_array.push(filtered_beats[random_number_1])
            current_deal_sale_array.push(filtered_beats[random_number_2])
            current_deal_sale_array.push(filtered_beats[random_number_3])
    
            return current_deal_sale_array
        end
    
        def show_newest_beats
            beats = Beat.all
    
            beat_length= beats.length
    
            newest_beats_array= []
    
            newest_beats_array.push(beats[beat_length-1])
            newest_beats_array.push(beats[beat_length-2])
            newest_beats_array.push(beats[beat_length-3])
    
           return  newest_beats_array
    
        end

        render json: {newest_beats: show_newest_beats, featured_beats: show_featured_beats, deals_and_sales: show_current_deals_and_sales}
    end

  


    private 

    def beat_params
        params.permit(:beat_name, :description, :mp3_price, :wav_price, :track_outs_price, :genre, :collaborators, :albumn_cover, :current_deal_sale, :featured_beats, :sale_discount_percentage, :instruments, :sampled_beat, :sampled_beat_link, :mp3_file, :wav_file, :track_outs)
    end

    def find_beat
        beat=Beat.find(params[:id])
    end
end
