import React, {
  createContext,
  ElementType,
  forwardRef,
  HTMLAttributes,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Manager } from 'react-popper'

import { useForkedRef } from '../../hooks'
import { placementPropType } from '../../props'
import type { Placements } from '../../types'

export type Directions = 'start' | 'end'

export type Breakpoints =
  | { xs: Directions }
  | { sm: Directions }
  | { md: Directions }
  | { lg: Directions }
  | { xl: Directions }
  | { xxl: Directions }

export type Alignments = Directions | Breakpoints

export interface CDropdownProps extends HTMLAttributes<HTMLDivElement | HTMLLIElement> {
  /**
   * Set aligment of dropdown menu.
   *
   * @type 'start' | 'end' | { xs: 'start' | 'end' } | { sm: 'start' | 'end' } | { md: 'start' | 'end' } | { lg: 'start' | 'end' } | { xl: 'start' | 'end'} | { xxl: 'start' | 'end'}
   */
  alignment?: Alignments
  /**
   * Configure the auto close behavior of the dropdown:
   * - `true` - the dropdown will be closed by clicking outside or inside the dropdown menu.
   * - `false` - the dropdown will be closed by clicking the toggle button and manually calling hide or toggle method. (Also will not be closed by pressing esc key)
   * - `'inside'` - the dropdown will be closed (only) by clicking inside the dropdown menu.
   * - `'outside'` - the dropdown will be closed (only) by clicking outside the dropdown menu.
   */
  autoClose?: 'inside' | 'outside' | boolean
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
  /**
   * Sets a darker color scheme to match a dark navbar.
   */
  dark?: boolean
  /**
   * Sets a specified  direction and location of the dropdown menu.
   */
  direction?: 'center' | 'dropup' | 'dropup-center' | 'dropend' | 'dropstart'
  /**
   * Callback fired when the component requests to be hidden.
   */
  onHide?: () => void
  /**
   * Callback fired when the component requests to be shown.
   */
  onShow?: () => void
  /**
   * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.
   *
   * @type 'auto' | 'top-end' | 'top' | 'top-start' | 'bottom-end' | 'bottom' | 'bottom-start' | 'right-start' | 'right' | 'right-end' | 'left-start' | 'left' | 'left-end'
   */
  placement?: Placements
  /**
   * If you want to disable dynamic positioning set this property to `true`.
   */
  popper?: boolean
  /**
   * Generates dropdown menu using createPortal.
   *
   * @since 4.8.0
   */
  portal?: boolean
  /**
   * Set the dropdown variant to an btn-group, dropdown, input-group, and nav-item.
   */
  variant?: 'btn-group' | 'dropdown' | 'input-group' | 'nav-item'
  /**
   * Toggle the visibility of dropdown menu component.
   */
  visible?: boolean
}

const PopperManagerWrapper = ({ children, popper }: { children: ReactNode; popper: boolean }) => {
  return popper ? <Manager>{children}</Manager> : <>{children}</>
}

interface ContextProps extends CDropdownProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dropdownToggleRef: RefObject<any> | undefined
  setVisible: React.Dispatch<React.SetStateAction<boolean | undefined>>
  portal: boolean
}

export const CDropdownContext = createContext({} as ContextProps)

export const CDropdown = forwardRef<HTMLDivElement | HTMLLIElement, CDropdownProps>(
  (
    {
      children,
      alignment,
      autoClose = true,
      className,
      dark,
      direction,
      onHide,
      onShow,
      placement = 'bottom-start',
      popper = true,
      portal = false,
      variant = 'btn-group',
      component = 'div',
      visible = false,
      ...rest
    },
    ref,
  ) => {
    const dropdownRef = useRef<HTMLDivElement>(null)
    const dropdownToggleRef = useRef(null)
    const forkedRef = useForkedRef(ref, dropdownRef)
    const [_visible, setVisible] = useState(visible)

    const Component = variant === 'nav-item' ? 'li' : component

    // Disable popper if responsive aligment is set.
    if (typeof alignment === 'object') {
      popper = false
    }

    const contextValues = {
      alignment,
      autoClose,
      dark,
      direction: direction,
      dropdownToggleRef,
      placement: placement,
      popper,
      portal: portal,
      variant,
      visible: _visible,
      setVisible,
    }

    useEffect(() => {
      setVisible(visible)
    }, [visible])

    useEffect(() => {
      _visible && onShow && onShow()
      !_visible && onHide && onHide()
    }, [_visible])

    return (
      <CDropdownContext.Provider value={contextValues}>
        <PopperManagerWrapper popper={popper}>
          {variant === 'input-group' ? (
            <>{children}</>
          ) : (
            <Component
              className={classNames(
                variant === 'nav-item' ? 'nav-item dropdown' : variant,
                {
                  'dropdown-center': direction === 'center',
                  'dropup dropup-center': direction === 'dropup-center',
                  [`${direction}`]:
                    direction && direction !== 'center' && direction !== 'dropup-center',
                  show: _visible,
                },
                className,
              )}
              {...rest}
              ref={forkedRef}
            >
              {children}
            </Component>
          )}
        </PopperManagerWrapper>
      </CDropdownContext.Provider>
    )
  },
)

const alignmentDirection = PropTypes.oneOf<Directions>(['start', 'end'])

CDropdown.propTypes = {
  // @ts-expect-error TODO: we have to find a solution
  alignment: PropTypes.oneOfType([
    alignmentDirection,
    PropTypes.shape({ xs: alignmentDirection }),
    PropTypes.shape({ sm: alignmentDirection }),
    PropTypes.shape({ md: alignmentDirection }),
    PropTypes.shape({ lg: alignmentDirection }),
    PropTypes.shape({ xl: alignmentDirection }),
    PropTypes.shape({ xxl: alignmentDirection }),
  ]),
  autoClose: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf<'inside' | 'outside'>(['inside', 'outside']),
  ]),
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  dark: PropTypes.bool,
  direction: PropTypes.oneOf(['center', 'dropup', 'dropup-center', 'dropend', 'dropstart']),
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  placement: placementPropType,
  popper: PropTypes.bool,
  portal: PropTypes.bool,
  variant: PropTypes.oneOf(['btn-group', 'dropdown', 'input-group', 'nav-item']),
  visible: PropTypes.bool,
}

CDropdown.displayName = 'CDropdown'
