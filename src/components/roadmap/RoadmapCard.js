import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { upvoteRequest } from '../../redux/features/product-requests/productRequestsSlice';
import styled from 'styled-components';
import { breakpoints, misc } from '../../styles';

const RoadmapCard = ({
  id,
  title,
  description,
  category,
  upvotes,
  upvoted,
  comments,
  status,
}) => {
  const dispatch = useDispatch();

  return (
    <RoadmapCardWrap status={status}>
      <Link to={`/feedback-detail/${id}`}>
        <span>
          <p className="status" data-testid="status">
            <span className="circle" status={status}></span>
            {status}
          </p>
          <h3>{title}</h3>
          <p data-testid="description">{description}</p>
          <button className="btn" title="category">
            {category}
          </button>
        </span>
      </Link>

      <span className="upvote-count">
        <button
          className={upvoted ? 'btn upvote-btn active' : 'btn upvote-btn'}
          onClick={(e) => {
            dispatch(upvoteRequest({ id, status }));
            e.stopPropagation();
          }}
          title="upvotes"
        >
          <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 6l4-4 4 4"
              stroke="#4661E6"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
          <span>{upvotes}</span>
        </button>
        <Link to={`/feedback-detail/${id}`}>
          <button className="btn comment-btn" title="comments">
            <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
                fill="#CDD2EE"
                fillRule="nonzero"
              />
            </svg>
            <span>{comments?.length}</span>
          </button>
        </Link>
      </span>
    </RoadmapCardWrap>
  );
};

export default RoadmapCard;

const RoadmapCardWrap = styled.article`
  display: grid;
  gap: 1rem;
  background-color: ${(props) => props.theme.white};
  padding: 2rem 1.25rem;
  border-radius: ${misc.rounded.sm};
  border-top: 8px solid
    ${(props) =>
      props.status === 'live'
        ? props.theme.blue
        : props.status === 'in-progress'
        ? props.theme.purple
        : props.theme.orange};

  h3 {
    margin-bottom: 1rem;
    font-size: 1rem;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${(props) => props.theme.blue};
    }
  }

  p {
    color: ${(props) => props.theme.grey_dark};
    margin-bottom: 1.5rem;
  }

  .upvote-count {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    .btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .comment-btn {
      background-color: transparent;
    }

    .upvote-btn {
      transition: background-color 0.3s ease-in-out;

      span {
        color: ${(props) => props.theme.dark_blue};
      }

      &:hover,
      &.active {
        color: ${(props) => props.theme.white};
        background-color: ${(props) => props.theme.blue};

        span {
          color: ${(props) => props.theme.white};
        }

        svg {
          path {
            stroke: ${(props) => props.theme.white};
          }
        }
      }

      &.active {
        transition: opacity 0.3s ease-in-out;
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }

  .status {
    text-transform: capitalize;
    display: flex;
    align-items: center;

    .circle {
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 1rem;
      background-color: ${(props) =>
        props.status === 'live'
          ? props.theme.blue
          : props.status === 'in-progress'
          ? props.theme.purple
          : props.theme.orange};
    }
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
  }
`;
