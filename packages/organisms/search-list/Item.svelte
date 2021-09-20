<script>
    import RichText from "@dusk-network/rich-text";
    export let token;
</script>
<div class="duk-search-list__item">
    <div class="duk-search-list__item--token">
        <div class="duk-search-list__item--border">
            {#if token.image}
                <img src="{token.image}" alt="symbol"/>
            {/if}
        </div>
        <RichText>
            <p>{token.token}</p>
        </RichText>
    </div>
    <RichText>
        <p>{token.amount}</p>
    </RichText>  
</div>