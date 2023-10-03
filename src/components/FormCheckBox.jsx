import { Checkbox } from '@shopify/polaris';

const FormCheckBox = (props) => {

  const {settings,setSettings} = props

  const handleChange = (name)=>{
    setSettings((prev)=>({
      ...prev,
      [name] : !prev[name]
    }))
  }

  return (


    <div className="w-100">
      <div className="w-100 mx-md-5 mb-2">
        <Checkbox
        label="Hide Reviews without Comments"
        checked={settings?.HideReviewsWithoutComments}
        onChange={()=>handleChange('HideReviewsWithoutComments')}
        >
        </Checkbox>
      </div>
      <div className="w-100 mx-md-5 mb-2">
        <Checkbox
        label="Hide Rating Text"
        checked={settings?.HideRatingText}
        onChange={()=>handleChange('HideRatingText')}
        >
        </Checkbox>
      </div>
      <div className="w-100 mx-md-5 mb-2">
        <Checkbox
        label="Show Reviewers Photo"
        checked={settings?.ShowReviewersPhoto}
        onChange={()=>handleChange('ShowReviewersPhoto')}
        >
        </Checkbox>
      </div>
      <div className="w-100 mx-md-5 mb-2">
        <Checkbox
        label="Show Reviewers Name"
        checked={settings?.ShowReviewersName}
        onChange={()=>handleChange('ShowReviewersName')}
        >
        </Checkbox>
      </div>
      <div className="w-100 mx-md-5 mb-2">
        <Checkbox
        label="Show View All Reviews Link"
        checked={settings?.ShowViewAllReviewsLink}
        onChange={()=>handleChange('ShowViewAllReviewsLink')}
        >
        </Checkbox>
      </div>
      <div className="w-100 mx-md-5 mb-2">
        <Checkbox
        label="Show Write a Review Button"
        checked={settings?.ShowWriteReviewButton}
        onChange={()=>handleChange('ShowWriteReviewButton')}
        >
        </Checkbox>
      </div>
      <div className="w-100 mx-md-5 mb-2">
        <Checkbox
        label="Auto Play"
        checked={settings?.AutoPlay}
        onChange={()=>handleChange('AutoPlay')}
        >
        </Checkbox>
      </div>
      <div className="w-100 mx-md-5 mb-2">
        <Checkbox
        label="Enable Hyper Link"
        checked={settings?.EnableHyperLink}
        onChange={()=>handleChange('EnableHyperLink')}
        >
        </Checkbox>
      </div>
    </div>
    
  );
};

export default FormCheckBox;
