// import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from './App.jsx'
// import './index.css'
// import UseState from "./useState/UseState";
// import { Home } from "./import_export/Home";
// import Lifecycle from "./LifeCycleModule/LifeCycleModule";
// import Lifecycle1 from "./LifeCycleModule/ComponentDidMount";
// import InputExample from "./classComponent/InputExample";
// import ClassCompEx from "./classComponent/ClassCompEx";
// import Form from "./classComponent/Form";
// import CreateForm from "./functionalCompForm/Form2";
// import CounterFC from "./useState1/counterClassComp";
// import RegisterProfileFC from "./classComponent/RegisterProfileFC";
// import FormV1 from "./useState/useStateForm";
// import FormV2 from "./useState/UseStateEvent";
// import FormsV3 from "./useState/CheckBox";
// import Example from "./task/example";
// import Example3 from "./task/example3";
// import Example6 from "./task5/Example6";
// import ParentCounter from "./props/ParenCounter";
// import ParentTask from "./props/propTask/ParentTask";
// import RegistrationForm from "./formREG/FormRegistation";
// import ParentUI from "./passDataChildToParentUsingProps/ParentUI";
// import ParentInput from "./passDataChildToParentUsingProps/2ndEx/parent2ndEx";
// import RegisterForm from "./passDataChildToParentUsingProps/TaskRegisterData/parent5";
// import ParentComponent from "./passDataChildToParentUsingProps/task/parent4";
// import SearchExample from "./useEffect/useEffect";
// import UseEffectCount from "./useEffect/useEffectCount";
// import APIWithUseEffect from "./useEffect/useEffect2";
// import UseEffectAPI from "./useEffect/UseEffectAPI";
// import ProductList from "./useEffect/fetchDataLoading/FetchData";
// import ProductList1 from "./useEffect/fetchDataLoading/ShowData";
// import ProductList3 from "./useEffect/fetchDataLoading/loader";
// import ArrayMap from "./useEffect/map/map";
// import UseEffectExample1 from "./useEffect/practiceUseEffect/UseEffectExample1";
// import Pract from "./useEffect/practiceUseEffect/pract";
// import ProductListWithFilters from "./day22/productSearch";
// import ProductListWithFilters1 from "./day22/productSearch1";
// import ProductListWithFilters4 from "./day22/product";
// import Loader from "./Spinner/LoaderSpinner";
// import ParentDay15 from "./UseEffectCleanUpFunction/ParentDay15";
// import UseMemoParentDay15B from "./UseEffectCleanUpFunction/UseMemo/ParentMemo";
// import TimerComp from "./UseEffectCleanUpFunction/UseMemo/TaskTimerSet/TimerComp";
// import ProductListWithFiltersWithUseMemo from "./useMemo/UsingUseMemoSearchProduct";
// import ReactMemo from "./useMemo/memo_useMemo_UseCallback/ReactMemo";
// import ExwithMemo from "./useMemo/memo_useMemo_UseCallback/withMemo";
// import WithoutMemo from "./useMemo/memo_useMemo_UseCallback/withoutMemo";
// import StopWatch from "./useMemo/StopWatch/Stopwatch1";
// import StopWatch from "./useMemo/StopWatch/Stopwatch";
// import CodeFlowV1 from "./useMemo/CreateSyncronousAndAvoidRr-renders/UseMemoAvoidRerenders";
// import ParentUseCallbackV2 from "./useCallback/parentUseCallback";
// import WithoutUseMemoExample from "./day-02-10/usingUseMemo";
// import Parentprop from "./san-task-childParent/parent";
// import Counter from "./useMemoPractice/withuseMemo";
// import Counter from "./useMemoPractice/withoutUseMemo";
// import ProductList1 from "./day-04-10/fetch";
// import ProductDetails from "./day-04-10/useParams/productDetails";
// import ProductList from "./day-04-10/useParams/productList";
// import ProductShow from "./day-04-10/task/productTask";
// import DynamicForm from "./task10-10-react/addField";
// import FetchData from "./day13-10-asyncAwaitFetchData/example";
import ProductsShow from "./day12-10-task-setTimingOpenWebsite/setTime";

const router = createBrowserRouter([
  // {
  //   path: "/products",
  //   element: <ProductList1 />,
  // },
  // {
  //   path: "/",
  //   element: <ProductDetails />,
  // },
  // {
  //   path: "/product-details/:productId",
  //   element: <ProductDetails />,
  // },
  // {
  //   path: "/products",
  //   element: <ProductList />,
  // },
  // {
  //   path: "/",
  //   element: <ProductList />,
  // },
  // {
  //   path: "/products/${product.id}",
  //   element: <ProductShow />,
  // },
  {
    path: "/",
    // element: <DynamicForm />,
    // element: <FetchData />,
    element: <ProductsShow />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <App /> */}
    {/* <UseState /> */}
    {/* <Home /> */}
    {/* <Lifecycle /> */}
    {/* <Lifecycle1 /> */}
    {/* <InputExample /> */}
    {/* <ClassCompEx /> */}
    {/* <CreateForm /> */}
    {/* <Form /> */}
    {/* <CounterFC /> */}
    {/* <RegisterProfileFC /> */}
    {/* <FormV1 /> */}
    {/* <FormV2 /> */}
    {/* <FormsV3 /> */}
    {/* <Example /> */}
    {/* <Example3 /> */}
    {/* <Example6 /> */}
    {/* <ParentCounter /> */}
    {/* <ParentTask /> */}
    {/* <RegistrationForm /> */}
    {/* <ParentUI /> */}
    {/* <ParentInput /> */}
    {/* <RegisterForm /> */}
    {/* <ParentComponent /> */}
    {/* <SearchExample /> */}
    {/* <UseEffectCount /> */}
    {/* <APIWithUseEffect /> */}
    {/* <UseEffectAPI /> */}
    {/* <ProductList /> */}
    {/* <ProductList1 /> */}
    {/* <ProductList3 /> */}
    {/* <ArrayMap /> */}
    {/* <UseEffectExample1 /> */}
    {/* <Pract /> */}
    {/* <ProductListWithFilters /> */}
    {/* <ProductListWithFilters1 /> */}
    {/* <ProductListWithFilters4 /> */}
    {/* <Loader /> */}
    {/* <ParentDay15 /> */}
    {/* <UseMemoParentDay15B /> */}
    {/* <TimerComp /> */}
    {/* <ProductListWithFiltersWithUseMemo /> */}
    {/* <ReactMemo /> */}
    {/* <ExwithMemo /> */}
    {/* <WithoutMemo /> */}
    {/* <StopWatch /> */}
    {/* <StopWatch /> */}
    {/* <CodeFlowV1 /> */}
    {/* <ParentUseCallbackV2 /> */}
    {/* <WithoutUseMemoExample /> */}
    {/* <Parentprop /> */}
    {/* <Counter/> */}
    {/* <Counter /> */}
    {/* <ProductList1 /> */}
    {/* <ProductDetails /> */}
    {/* <ProductList /> */}
    {/* <ProductDetails /> */}
    {/* <ProductShow /> */}
    <RouterProvider router={router} />
  </>
);
