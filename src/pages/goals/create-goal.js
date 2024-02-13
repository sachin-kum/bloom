import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { UserProfile } from '../../API'
import Footer from '../../components/footer'
import Header from '../../components/header'

const CreateGoal = () => {
  const Navigate = useNavigate()
  const [option, setOption] = useState('selete your goal')
  const [tab, setTab] = useState({
    tab1: true,
    tab2: false,
    tab3: false
  })
  const hadalTab = target => {
    setTab(target)
  }

  const [savingOption, SetSavingOption] = useState({
    BankOption: false,
    EstateOption: false,
    GoldOption: false,
    InsuranceOption: false,
    Pension_Fund: false,
    Others_option: false
  })

  const [dataList, setDataList] = useState({
    funds: 0,
    income: 0,
    expenses: 0,
    years2: 1,
    occupation: '',
    membersFamily: '',
    membersEarning: '',
    dependentsMember: '',
    riskTake: '',
    quest: '',
    questi: '',
    questio: '',
    question1: '',
    question2: '',
    presentIA: 0,
    bank_option_value: 0,
    estate_option_value: 0,
    gold_option_value: 0,
    insurance_option_value: 0,
    pension_fund_value: 0,
    others_option_value: 0,
  })
  const hadalCheckBox = (event) => {
    const { name, checked } = event.target
    SetSavingOption({
      ...savingOption,
      [name]: checked
    })
  }

  const hadalChange = event => {
    const { name, value } = event.target
    setDataList({
      ...dataList,
      [name]: value
    })
  }
  const [cookie] = useCookies(['token'])
  const [client, setClient] = useState('')
  useEffect(() => {
    const getdata = async () => {
      const data = await UserProfile(cookie.token)
      setClient(data.data[0].ClientCode)
    }
    getdata()
  }, [])
  const handalSubmit = async event => {
    event.preventDefault()
    const remmeningTime = new Date(
      new Date().getTime() + dataList.years2 * 31556952000
    )
    const datalist = {
      ...dataList,
      user_id: client,
      goal: option,
      remaining_time: remmeningTime
    }
    await axios.post('https://urlsdemo.xyz/tradeweb/api/risk-Profile', datalist)
    Navigate('/goals')
  }
  const handleGoalDropDown = goalOption => {
    setOption(goalOption)
  }
  return (
    <div className='goals-parent'>
      <style>
        {`.goals {
                margin-bottom: -3px;
                border-bottom: 3px solid #516DAB;
                }`}
      </style>
      <Header />

      {/* Goals Title */}
      <div className='container report-top-container'>
        <div className='row report-os-row'>
          <div className='left col-lg-6'>
            <h2>Create a Goal</h2>
          </div>
          <div className='col-lg-6 d-none d-lg-flex'></div>
        </div>
      </div>
      {/* Goals Title End */}

      <div className='container cg-parent'>
        <div className='row'>
          <div className='col-lg-8'>
            <form onSubmit={handalSubmit}>
              <div className='nav nav-tabs'>
                <button
                  type='button'
                  className={tab.tab1 ? 'nav-link active' : 'nav-link'}
                  onClick={() => {
                    hadalTab({
                      tab1: true,
                      tab2: false,
                      tab3: false
                    })
                  }}
                >
                  <h1>
                    <span>1</span>Risk Need
                  </h1>
                </button>

                <button
                  type='button'
                  className={tab.tab2 ? 'nav-link active' : 'nav-link'}
                  onClick={() => {
                    hadalTab({
                      tab1: false,
                      tab2: true,
                      tab3: false
                    })
                  }}
                >
                  <h1>
                    <span>2</span>Risk Capacity
                  </h1>
                </button>

                <button
                  type='button'
                  className={tab.tab3 ? 'nav-link active' : 'nav-link'}
                  onClick={() => {
                    hadalTab({
                      tab1: false,
                      tab2: false,
                      tab3: true
                    })
                  }}
                >
                  <h1>
                    <span>3</span>Risk Tolerance
                  </h1>
                </button>
              </div>

              <div className='tab-content' id='myTabContent'>
                <div
                  className={
                    tab.tab1 ? 'tab-pane show active' : 'tab-pane show'
                  }
                  id='tabs-1'
                  role='tabpanel'
                  aria-labelledby='tabs-tab1'
                >
                  <div className='cg-input-box col-lg-6'>
                    {/* <label htmlFor="goal">Whats your goal?</label>
                                        <input type="text" name="goal" value={dataList.goal} onChange={hadalChange} />  */}
                    <div className='dropdown '>
                      <a
                        href='/create-goal' role='button' className='btn dropdown-toggle sliderv1' id='dropdownMenuLink' data-bs-toggle='dropdown' aria-expanded='false'
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          color: '#777e91',
                          border: '2px solid #e6e8ec'
                        }}
                        onChange={hadalChange}
                      >
                        {option}
                      </a>
                      {/* Whats your goal? */}
                      <ul
                        className='dropdown-menu'
                        aria-labelledby='dropdownMfenuLink'
                      >
                        <li className='dropdown-item' onClick={() => { handleGoalDropDown('Child Education') }}>
                          Child Education
                        </li>
                        <li
                          className='dropdown-item'
                          onClick={() => {
                            handleGoalDropDown('Child Marriage')
                          }}
                        >
                          Child Marriage
                        </li>
                        <li
                          className='dropdown-item'
                          onClick={() => {
                            handleGoalDropDown('Charity')
                          }}
                        >
                          Charity
                        </li>
                        <li
                          className='dropdown-item'
                          onClick={() => {
                            handleGoalDropDown(
                              'Leaving inheritance for future generation'
                            )
                          }}
                        >
                          Leaving inheritance for future generation
                        </li>
                        <li
                          className='dropdown-item'
                          onClick={() => {
                            handleGoalDropDown('Buying a home/Car/other asset')
                          }}
                        >
                          Buying a home/Car/other asset
                        </li>
                        <li
                          className='dropdown-item'
                          onClick={() => {
                            handleGoalDropDown('To invest in real estate')
                          }}
                        >
                          To invest in real estate
                        </li>
                        <li
                          className='dropdown-item'
                          onClick={() => {
                            handleGoalDropDown('To plan a vacation')
                          }}
                        >
                          To plan a vacation
                        </li>
                        <li
                          className='dropdown-item'
                          onClick={() => {
                            handleGoalDropDown(
                              'To diversify my risk (already too much invested in real estate/precious  metals like gold and siver'
                            )
                          }}
                        >
                          To diversify my risk (already too much invested in
                          real estate/precious metals like gold and silver)
                        </li>
                        <li
                          className='dropdown-item'
                          onClick={() => {
                            handleGoalDropDown('Financial Independence')
                          }}
                        >
                          Financial Independence
                        </li>
                        <li
                          className='dropdown-item'
                          onClick={() => {
                            handleGoalDropDown('To develop a habit of saving')
                          }}
                        >
                          To develop a habit of saving
                        </li>
                        <li
                          className='dropdown-item'
                          onClick={() => {
                            handleGoalDropDown('To raise my family')
                          }}
                        >
                          To raise my family
                        </li>
                        <li
                          className='dropdown-item'
                          onClick={() => {
                            handleGoalDropDown('Own Marriage fund')
                          }}
                        >
                          Own Marriage fund
                        </li>
                        <li
                          className='dropdown-item'
                          onClick={() => {
                            handleGoalDropDown(
                              'To provide a stable life to next generation'
                            )
                          }}
                        >
                          To provide a stable life to next generation
                        </li>
                        <li
                          className='dropdown-item'
                          onClick={() => {
                            handleGoalDropDown(
                              'To start a new business after few years'
                            )
                          }}
                        >
                          To start a new business after few years
                        </li>
                        <li
                          className='dropdown-item'
                          onClick={() => {
                            handleGoalDropDown('To run existing business')
                          }}
                        >
                          To run existing business
                        </li>
                        <li
                          className='dropdown-item'
                          onClick={() => {
                            handleGoalDropDown('Loan repayments')
                          }}
                        >
                          Loan repayments
                        </li>
                        <li
                          className='dropdown-item'
                          onClick={() => {
                            handleGoalDropDown('Retirements')
                          }}
                        >
                          Retirement
                        </li>
                        <li
                          className='dropdown-item'
                          onClick={() => {
                            handleGoalDropDown('Emergengy Funds')
                          }}
                        >
                          Emergency Fund
                        </li>
                        <li
                          className='dropdown-item'
                          onClick={() => {
                            handleGoalDropDown('Others')
                          }}
                        >
                          Others
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='cg-input-box'>
                    <div className='row'>
                      <div className='col-lg-9 left'>
                        <label htmlFor='funds'>
                          How much funds is required for your goal?
                        </label>
                      </div>
                      <div className='col-lg-3 right'>
                        <div className='sliderv1'>₹ <input type="number" className='rangeInput' name='funds' value={dataList.funds} onChange={hadalChange} /></div>
                      </div>
                      <div className='slidecontainer'>
                        <input type='range' min='100000' max='10000000' className='slider' name='funds' id='slider1'
                          step={50000} value={dataList.funds} onChange={hadalChange} />
                      </div>
                    </div>
                  </div>

                  <div className='cg-input-box'>
                    <div className='row'>
                      <div className='col-lg-9 left'>
                        <label htmlFor='funds'>
                          what is the present value of invested amount?
                        </label>
                      </div>
                      <div className='col-lg-3 right'>
                        <div className='sliderv1'>₹ <input type="number" className='rangeInput' name='presentIA' value={dataList.presentIA} onChange={hadalChange} /></div>
                      </div>
                      <div className='slidecontainer'>
                        <input type='range' min='100000' max='10000000' className='slider' name='presentIA' id='slider1'
                          step={50000} value={dataList.presentIA} onChange={hadalChange} />
                      </div>
                    </div>
                  </div>



                  <div className='cg-input-box col-lg-6'>
                    <label htmlFor='occupation'>Occupation details</label>
                    <input
                      type='text'
                      name='occupation'
                      id='occupation'
                      value={dataList.occupation}
                      onChange={hadalChange}
                    />
                  </div>
                  <div className='cg-input-box'>
                    <div className='row'>
                      <div className='col-lg-9 left'>
                        <label htmlFor='income'>
                          Whats your current income?
                        </label>
                      </div>
                      <div className='col-lg-3 right'>
                        <div className='sliderv1'>₹ <input type="number" className='rangeInput' name='income' value={dataList.income} onChange={hadalChange} /></div>
                      </div>
                      <div className='slidecontainer'>
                        <input
                          type='range'
                          min='0'
                          max='10000000'
                          className='slider'
                          name='income'
                          step={100000}
                          value={dataList.income}
                          onChange={hadalChange}
                        />
                        <span id='demo'></span>
                      </div>
                    </div>
                  </div>
                  <div className='cg-input-box'>
                    <div className='row'>
                      <div className='col-lg-9 left'>
                        <label htmlFor='expenses'>
                          What percentage of your monthly salary is consumed towards your expenses?
                        </label>
                      </div>
                      <div className='col-lg-3 right'>
                        <div className='sliderv1'> <input type="number" name='expenses' onChange={hadalChange} value={dataList.expenses} style={{ width: '10px !important' }} className='rangeInput' /> %</div>
                      </div>
                      <div className='slidecontainer'>
                        <input
                          type='range'
                          min='1'
                          max='100'
                          className='slider'
                          name='expenses'
                          value={dataList.expenses}
                          onChange={hadalChange}
                        />
                        <span id='demo'></span>
                      </div>
                    </div>
                  </div>
                  {/* <a type="button" className="button1" id="mybut">Next</a> */}
                  <button
                    type='button'
                    className='button1 btnNext'
                    onClick={() => {
                      hadalTab({
                        tab1: false,
                        tab2: true,
                        tab3: false
                      })
                    }}
                  >
                    Next
                  </button>
                </div>

                <div
                  className={
                    tab.tab2 ? 'tab-pane show active' : 'tab-pane show'
                  }
                  id='tabs-2'
                  role='tabpanel'
                  aria-labelledby='tabs-2'
                >
                  <div className='cg-input-box'>
                    <div className='row'>
                      <div className='col-lg-9 left'>
                        <label htmlFor='years2'>
                          When would you require funds (in Years) for the goals
                          mentioned by you?
                        </label>
                      </div>
                      <div className='col-lg-3 right'>
                        <div className='sliderv1'>{dataList.years2} years</div>
                      </div>
                      <div className='slidecontainer'>
                        <input
                          type='range'
                          min='1'
                          max='100'
                          className='slider'
                          value={dataList.years2}
                          onChange={hadalChange}
                          name='years2'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='cg-input-box'>
                    <label>Where do you have your current savings</label>
                    <div className='form-check'>
                      <div>
                        <input
                          type='checkbox'
                          className='form-check-input'
                          id='check1'
                          name='BankOption'
                          onChange={hadalCheckBox}
                          value='FD’S / Bank Saving'
                        />
                        <label className='form-check-label' htmlFor='check1'>
                          FD’S / Bank Saving
                        </label>
                      </div>
                      {savingOption.BankOption && <div className='bankValue'><input name="bank_option_value" onChange={hadalChange} placeholder='0' type="number" className='rangeInput' />INR</div>}
                    </div>
                    <div className='form-check'>
                      <div>
                        <input
                          type='checkbox'
                          className='form-check-input'
                          id='check2'
                          name='EstateOption'
                          onChange={hadalCheckBox}
                          value='Real Estate'
                        />
                        <label className='form-check-label' htmlFor='check2'>
                          Real Estate
                        </label>
                      </div>
                      {savingOption.EstateOption && <div className='bankValue'><input name="estate_option_value" onChange={hadalChange} placeholder='0' type="number" className='rangeInput' />INR</div>}
                    </div>
                    <div className='form-check'>
                      <div>
                        <input
                          type='checkbox'
                          className='form-check-input'
                          id='check3'
                          name='GoldOption'
                          onChange={hadalCheckBox}
                          value='Gold and other ornaments'
                        />
                        <label className='form-check-label' htmlFor='check3'>
                          Gold and other ornaments
                        </label>
                      </div>
                      {savingOption.GoldOption && <div className='bankValue'><input name="gold_option_value" onChange={hadalChange} placeholder='0' type="number" className='rangeInput' />INR</div>}
                    </div>
                    <div className='form-check'>
                      <div>
                        <input
                          type='checkbox'
                          className='form-check-input'
                          id='check4'
                          name='InsuranceOption'
                          onChange={hadalCheckBox}
                          value='Insurance'
                        />
                        <label className='form-check-label' htmlFor='check4'>
                          Insurance
                        </label>
                      </div>
                      {savingOption.InsuranceOption && <div className='bankValue'><input name="insurance_option_value" onChange={hadalChange} placeholder='0' type="number" className='rangeInput' />INR</div>}
                    </div>
                    <div className='form-check'>
                      <div>
                        <input
                          type='checkbox'
                          className='form-check-input'
                          id='check5'
                          name='Pension_Fund'
                          onChange={hadalCheckBox}
                          value='Pension Fund'
                        />
                        <label className='form-check-label' htmlFor='check5'>
                          Pension Fund
                        </label>
                      </div>
                      {savingOption.Pension_Fund && <div className='bankValue'><input name="pension_fund_value" onChange={hadalChange} placeholder='0' type="number" className='rangeInput' />INR</div>}
                    </div>
                    <div className='form-check'>
                      <div>
                        <input
                          type='checkbox'
                          className='form-check-input'
                          id='check6'
                          name='Others_option'
                          onChange={hadalCheckBox}
                          value='Others'
                        />
                        <label className='form-check-label' htmlFor='check6'>
                          Others
                        </label>
                      </div>
                      {savingOption.Others_option && <div className='bankValue'><input name="others_option_value" onChange={hadalChange} placeholder='0' type="number" className='rangeInput' />INR</div>}
                    </div>
                  </div>
                  <div className='cg-input-box'>
                    <div className='border'></div>
                  </div>
                  <div className='cg-input-box col-lg-8'>
                    <div className='row'>
                      <div className='col-lg-6 left'>
                        <label>
                          How many members are there in your family?
                        </label>
                      </div>
                      <div className='col-lg-6 right'>
                        <input
                          type='number'
                          placeholder='2'
                          name='membersFamily'
                          value={dataList.membersFamily}
                          onChange={hadalChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='cg-input-box col-lg-8'>
                    <div className='row'>
                      <div className='col-lg-6 left'>
                        <label>
                          How many of your family members are earning?
                        </label>
                      </div>
                      <div className='col-lg-6 right'>
                        <input
                          type='number'
                          placeholder='2'
                          name='membersEarning'
                          value={dataList.membersEarning}
                          onChange={hadalChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='cg-input-box col-lg-8'>
                    <div className='row'>
                      <div className='col-lg-6 left'>
                        <label>How many dependents do you have?</label>
                      </div>
                      <div className='col-lg-6 right'>
                        <input
                          type='number'
                          placeholder='2'
                          name='dependentsMember'
                          value={dataList.dependentsMember}
                          onChange={hadalChange}
                        />
                      </div>
                    </div>
                  </div>
                  {/* <a type="button" className="button1" id="mybut2">Next</a> */}
                  <button
                    type='button'
                    className='button1 btnNext'
                    onClick={() => {
                      hadalTab({
                        tab1: false,
                        tab2: false,
                        tab3: true
                      })
                    }}
                  >
                    Next
                  </button>
                </div>
                <div
                  className={
                    tab.tab3 ? 'tab-pane show active' : 'tab-pane show'
                  }
                  id='tabs-3' role='tabpanel' aria-labelledby='tabs-3'
                >
                  <div className='cg-input-box'>
                    <label>
                      How much financial risk are you willing to take?
                    </label>
                    <div className='pt-3'>
                      <input type='radio' id='ques' name='riskTake' value='Very Low' onClick={hadalChange} />
                      <label className='radiolable' htmlFor='ques'>
                        Very Low
                      </label>

                      <input type='radio' id='ques2' name='riskTake' value='Low' onClick={hadalChange} />
                      <label className='radiolable' htmlFor='ques2'>
                        Low
                      </label>

                      <input type='radio' id='ques3' name='riskTake' value='Moderate' onClick={hadalChange} />
                      <label className='radiolable' htmlFor='ques3'>
                        Moderate
                      </label>

                      <input type='radio' id='ques4' name='riskTake' value='High' onClick={hadalChange} />
                      <label className='radiolable' htmlFor='ques4'>
                        High
                      </label>
                      <input type='radio' id='ques5' name='riskTake' value='Very High' onClick={hadalChange} />
                      <label className='radiolable' htmlFor='ques5'>
                        Very High
                      </label>
                    </div>
                  </div>

                  <div className='cg-input-box'>
                    <label>
                      What is your preference while holding risky assets?
                    </label>
                    <div className='pt-3'>
                      <input type='radio' id='quest' name='quest' value='Maximum Safety' onChange={hadalChange} />
                      <label className='radiolable' htmlFor='quest'>
                        Maximum Safety
                      </label>

                      <input type='radio' id='quest2' name='quest' value='Mostly Safety' onChange={hadalChange} />
                      <label className='radiolable' htmlFor='quest2'>
                        Mostly Safety
                      </label>

                      <input
                        type='radio' id='quest3' name='quest' value='Mix Safety & Return' onChange={hadalChange} />
                      <label className='radiolable' htmlFor='quest3'>
                        Mix Safety & Return
                      </label>

                      <input type='radio' id='quest4' name='quest' value='Mostly Return' onChange={hadalChange} />
                      <label className='radiolable' htmlFor='quest4'>
                        Mostly Return
                      </label>

                      <input type='radio' id='quest5' name='quest' value='Maximize Return' onChange={hadalChange} />
                      <label className='radiolable' htmlFor='quest5'>
                        Maximize Return
                      </label>
                    </div>
                  </div>

                  <div className='cg-input-box'>
                    <label>
                      How much do you know about financial and investment
                      concepts?
                    </label>
                    <div className='pt-3'>
                      <input type='radio' id='questi' name='questi' onChange={hadalChange} value='Not at all' />
                      <label className='radiolable' htmlFor='questi'>
                        Not at all
                      </label>

                      <input type='radio' id='questi2' name='questi' onChange={hadalChange} value='Very Less' />
                      <label className='radiolable' htmlFor='questi2'>
                        Very Less
                      </label>

                      <input type='radio' id='questi3' name='questi' onChange={hadalChange} value='Satisfactory' />
                      <label className='radiolable' htmlFor='questi3'>
                        Satisfactory
                      </label>

                      <input type='radio' id='questi4' name='questi' onChange={hadalChange} value='Moderate' />
                      <label className='radiolable' htmlFor='questi4'>
                        Moderate
                      </label>

                      <input type='radio' id='questi5' name='questi' onChange={hadalChange} value='Highly Knowledgable' />
                      <label className='radiolable' htmlFor='questi5'>
                        Highly Knowledgable
                      </label>
                    </div>
                  </div>

                  <div className='cg-input-box'>
                    <label>
                      How much experience do you have with investment products?
                    </label>
                    <div className='pt-3'>
                      <input type='radio' id='questio' name='questio' onChange={hadalChange} value='No' />
                      <label className='radiolable' htmlFor='questio'>
                        No
                      </label>

                      <input type='radio' id='questio2' name='questio' onChange={hadalChange} value='Very Little ' />
                      <label className='radiolable' htmlFor='questio2'>
                        Very Little
                      </label>

                      <input type='radio' id='questio3' name='questio' onChange={hadalChange} value='Some' />
                      <label className='radiolable' htmlFor='questio3'>
                        Some
                      </label>

                      <input type='radio' id='questio4' name='questio' onChange={hadalChange} value='Moderate' />
                      <label className='radiolable' htmlFor='questio4'>
                        Moderate
                      </label>

                      <input type='radio' id='questio5' name='questio' onChange={hadalChange} value='Extensive' />
                      <label className='radiolable' htmlFor='questio5'>
                        Extensive
                      </label>
                    </div>
                  </div>

                  <div className='cg-input-box'>
                    <label>
                      What is your perception towards the stock market?
                    </label>
                    <div className='pt-3'>
                      <input type='radio' id='question' name='question1' onChange={hadalChange} value='Very Risky' />
                      <label className='radiolable' htmlFor='question'>
                        Very Risky
                      </label>

                      <input type='radio' id='question2' name='question1' onChange={hadalChange} value='Somewhat Risky' />
                      <label className='radiolable' htmlFor='question2'>
                        Somewhat Risky
                      </label>

                      <input type='radio' id='question3' name='question1' onChange={hadalChange} value='Neutral' />
                      <label className='radiolable' htmlFor='question3'>
                        Neutral
                      </label>

                      <input type='radio' id='question4' name='question1' onChange={hadalChange} value='Somewhat Safe' />
                      <label className='radiolable' htmlFor='question4'>
                        Somewhat Safe
                      </label>
                    </div>
                  </div>

                  <div className='cg-input-box'>
                    <label>
                      In the past, when faced with investment losses, what
                      action did you take?
                    </label>
                    <div className='pt-3'>
                      <input
                        type='radio' id='questions' name='question2' onChange={hadalChange} value='Sold Out' />
                      <label className='radiolable' htmlFor='questions'>
                        Sold Out
                      </label>

                      <input
                        type='radio' id='questions2' name='question2' onChange={hadalChange} value='Did Nothing' />
                      <label className='radiolable' htmlFor='questions2'>
                        Did Nothing
                      </label>

                      <input
                        type='radio' id='questions3' name='question2' onChange={hadalChange} value='Purchased More' />
                      <label className='radiolable' htmlFor='questions3'>
                        Purchased More
                      </label>

                      <input type='radio' id='questions4' name='question2' onChange={hadalChange} value='I am New To Investing' />
                      <label className='radiolable' htmlFor='questions4'>
                        I am New To Investing
                      </label>
                    </div>
                  </div>

                  <button type='submit' className='button1' id='mybut'>
                    Create Goal
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className='col-lg-4'>
            <div className='cg-detail-box'>
              {/* <h2>Childs Marriage</h2> */}
              <h2>{dataList.goal}</h2>
              <div className='row cgd-inner-row'>
                <div className='col-6 left'>
                  <h5>Amount to be saved</h5>
                </div>
                <div className='col-6 right'>
                  <h4>
                    <span>₹{dataList.funds}</span>
                  </h4>
                </div>
              </div>
              <div className='row cgd-inner-row'>
                <div className='col-6 left'>
                  <h5>Maturity Date</h5>
                </div>
                <div className='col-6 right'>
                  <h4>
                    <span>{(new Date(new Date().getTime() + dataList.years2 * 31556952000)).toLocaleString("en-NZ").split(',')[0]}</span>
                  </h4>
                </div>
              </div>
              <div className='row cgd-inner-row'>
                <div className='col-6 left'>
                  <h5>Tenure</h5>
                </div>
                <div className='col-6 right'>
                  <h4>
                    <span>{`${dataList.years2} Years`}</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
export default CreateGoal
