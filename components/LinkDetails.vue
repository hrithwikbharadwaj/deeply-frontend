<template>
<div id="cardPad" > 
    
    <div class="card" >
        <div class="card-content">
            <div class="content">
            Original URL : {{slugDetails.longURL}}
            </div>
    
        </div>

    </div>
 
<br>
    <div class="card">
        <div class="card-content">
        
            <div class="content" >
        
            Short URL : {{slugDetails.shortUrl}}
            </div>
        
        </div>
    </div>

<br>
    <div class="box">
        <div class="columns">
                <div class="column" animation="fade">
                    <div class="card">
                        <div class="card-content">
                
                                <div class="content" >
                    
                                    Web Clicks : {{slugDetails.webClicks}}
                                </div>
                    
                        </div>
                    </div>

                </div>

                <div class="column" animation="fade">
                    <div class="card">
                        <div class="card-content">
                
                                <div class="content" >
                    
                                    Android Clicks : {{slugDetails.androidClicks}}
                                </div>
                    
                        </div>
                    </div>

                </div>           


             
                <div class="column" animation="fade">
                    <div class="card">
                        <div class="card-content">
                
                                <div class="content" >
                    
                                    IOS Clicks : {{slugDetails.iosClicks}}
                                </div>
                    
                        </div>
                    </div>

                </div>    
                        
        </div>
    </div>

</div>
</template>



<script>
export default {
    
    props: {
   slugDetails: {
    //   type: String,
      required: true
    }
     },
}
</script>