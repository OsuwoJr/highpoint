// This is just a minimal loader that makes the [id] parameter available to the page
export function load({ params }) {
  return {
    id: params.id
  };
} 