<script>
  import CsapatApi from '../generated-client/src/api/CsapatApi';
  import { onMount } from 'svelte';

  let csapatok = [];

  onMount(() => {
    const apiInstance = new CsapatApi();
    apiInstance.apiCsapatGet((error, data, response) => {
      if (error) {
        console.error(error);
      } else {
        csapatok = data;
      }
    });
  });
</script>

<main>
  <h1>Csapatok</h1>
  <ul>
    {#each csapatok as csapat}
      <li>{csapat.csapatNev}</li>
    {/each}
  </ul>
</main>