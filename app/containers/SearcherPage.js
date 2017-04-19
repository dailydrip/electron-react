import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Searcher from '../components/Searcher';
import * as searcherActions from '../actions/searcher';

function mapStateToProps(state) {
  return {
    pokemon: state.searcher.get('pokemon'),
    loading: state.searcher.get('loading')
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(searcherActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Searcher);
