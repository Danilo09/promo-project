<template>
    <section class="home-products-promotion">
        <h2>
            Produto em Destaque
        </h2>
        <div class="card">
            <div class="card-content">
                <img src="@/assets/desinfetante.png" alt="headphone">
            </div>
            <div class="card-infos">
                <h3 class="card-title">Loren Ipsum Lorem</h3>
                <h2 class="price">$40.<small>99</small></h2>
                <a href="/login" class="buy">Comprar</a>
            </div>
        </div>
    </section>

</template>
  
<script>
export default {
    name: "product-view"
};
</script>

<style scoped>
/*==================== GOOGLE FONTS ====================*/
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');


.home-products-promotion {
    text-align: center;
}
h2 {
    text-align: center;
    margin: 20px 10px;
    text-transform: uppercase;
    font-size: 2rem;
    margin-top: 40px;
    color: #87f;
    font-weight: bold;
}

.card {
    position: relative;
    width: 320px;
    height: 420px;
    background: transparent;
    border-radius: 20px;
    overflow: hidden;
    display: inline-block;
    z-index: 99999;
}

.card:before {
    content: '';
    position: absolute;
    top: -120%;
    width: 100%;
    height: 100%;
    background: #87f;
    transform: skewY(345deg) !important;
    transition: 1s;
    left: 0;
}

.card:hover:before {
    top: -60%;
    transform: skewY(390deg) !important;
}

.card:after {
    content:'';
    position: absolute;
    bottom: 0;
    left: 0;
    font-weight: 600;
    font-size: 6.5em;
    color: rgba(0,0,0,0.1)
}

.card .card-content {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    z-index: 1;
    max-width: 100%;
}

.card .card-content img {
    max-width: 100%;
    transition: 0.5s ease-in;
}

.card:hover {
    background-color: #4324b1;
}

.card:hover .card-infos .card-title {
    color: #FFFFFF;
}

.card:hover .card-content img {
    max-width: 70%;
}

.card:hover .card-content img {
    max-width: 70%;
}

.card:hover .card-infos .buy {
    top: 10px;
    opacity: 1;
}

.card .card-infos {
    position: relative;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
}

.card .card-infos h3 {
    font-size: 18px;
    color: transparent;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.card .card-infos .price {
    display: none;
}

.card .card-infos .buy {
    position: relative;
    top: 200px;
    opacity: 0;
    padding: 10px 30px;
    margin-top: 15px;
    color: #FFF;
    text-decoration: none;
    background: #87f;
    border-radius: 30px;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: 0.5s;
}
</style>


