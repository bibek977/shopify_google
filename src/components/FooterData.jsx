const map = () => {
    return (
      <a style={{textDecoration:'none'}} href="https://www.google.com/maps/@27.9308066,6.7369589,3z?entry=ttu">Google Maps</a>
    );
  };
  
  export const footer_data = [
    {
      foo: (
        <>
          Start by entering your Google Business name, or domain in the search bar. The list of results based on your search will be displayed. Or connect your Google Business using Google Map URL. You can use {map()} to find your Business.
        </>
      )},
    {
      foo: "Choose your desired account from the list and connect it. Once connected, you will see a default preview of the reviews."
    },
    {
      foo: 'To customize the layout and settings, navigate to the "Layout Template" and "Layout Settings" sections.'
    },
    {
      foo: 'If you want to add reviews to your store, go to the "Installation" tab and click on the setup button. This will take you to the customization page.'
    },
    {
      foo: 'On the customization page, click on the "Add" section and select "Google Review" from the options. You will be able to preview the changes. Don"t forget to save the changes to publish them on your store.'
    },
  ];
  